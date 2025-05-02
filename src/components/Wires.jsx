import { useEffect, useRef, useState } from "react";
import "../assets/scss/Wires.scss";
import ReactDOMServer from "react-dom/server";
import { iconMap } from "../icons/shapesIcons";
import { THEMES } from "../constants/constants";

let mouseX = 0;
let mouseY = 0;

// Preload images and SVGs
const preloadImages = async (wires, tarjets, theme) => {
  const images = {};

  const loadImage = (src, name) =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        images[name] = img;
        resolve();
      };
    });

  const loadSvg = (svgImg, color, name) => {
    const svgString = ReactDOMServer.renderToString(svgImg({ width: 50, height: 50, color }));
    const url = URL.createObjectURL(new Blob([svgString], { type: "image/svg+xml;charset=utf-8" }));
    const svgImage = new Image();
    svgImage.src = url;
    return new Promise((resolve) => {
      svgImage.onload = () => {
        images[name] = svgImage;
        URL.revokeObjectURL(url);
        resolve();
      };
    });
  };

  await Promise.all([
    ...wires.map((wire, i) => {
      const wireImagePromise = loadSvg(theme.wire, wire.color, i).then(() => {
        if (wire.image) return loadImage(wire.image, i + "img");
        else if (wire.ico) return loadSvg(iconMap[wire.ico], wire.colorIco, i + "ico");
        Promise.resolve();
      });
      return wireImagePromise;
    }),
    ...tarjets.map((target, i) => {
      if (target.image) return loadImage(target.image, i + "img target");
      else if (target.ico) return loadSvg(iconMap[target.ico], target.colorIco, i + "ico target");
      Promise.resolve();
    }),
  ]);

  return images;
};

const FixWiringGame = ({ config, setConnections, size }) => {
  const canvasRef = useRef(null);
  const [preloadedImages, setPreloadedImages] = useState(null);

  const connectorImg = new Image();
  connectorImg.src = config.theme.connectionImg;
  const backgroundImg = new Image();
  backgroundImg.src = config.theme.panelBackgroundImg;
  const pickWireAudio = document.getElementById("audio_pick-wire");
  const plugWireAudio = document.getElementById("audio_plug-wire");

  useEffect(() => {
    const loadIcons = async () => {
      const images = await preloadImages(config.wires, config.target, config.theme);
      setPreloadedImages(images);
    };

    loadIcons();
  }, [config.wires]);

  useEffect(() => {
    if (!preloadedImages) return;
    //El tamaño del canvas depende del tamaño de la pantalla
    const canvasWidth = size.width * 0.75;
    const canvasHeight = size.height * 0.64;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const ropeTexture = new Image();
    ropeTexture.src = "/src/assets/images/rope_texture.jpg";
    let ropePattern = null;
    ropeTexture.onload = () => {
      ropePattern = ctx.createPattern(ropeTexture, "repeat");
    };

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //cables de abajo
    const wires = config.wires;
    //areas de arriba
    const targets = config.target;
    //controla el cable que estás arrastrando
    let selectedWireIndex = -1;
    //area de los cables y los tarjets dependiendo del numero de cables y tamaño de pantalla
    const WAWidth = canvasWidth / wires.length;
    const WAHeight = canvasHeight * 0.2;

    //Variables que dependen del tamaño de la pantalla y del numero de cables
    const fontSize = `${WAWidth / 8}px Arial`;
    const wireWidth = WAWidth * 0.05; // Grosor del cable
    const labelImgSize = WAWidth / 6; // Tamaño de la imagen de la etiqueta (areas)
    const jackSizeH = WAWidth * 0.3;
    const jackSizeW = WAWidth * 0.4;
    const connectorImgSize = WAWidth / 5; // Tamaño de la imagen del conector del area de arriba
    const connectedJackWidth = WAWidth * 0.1; // Ancho del jack conectado (rectangulo para simular el jack conectado)
    const connectedJackHeight = WAWidth * 0.2; // Alto del jack conectado (rectangulo para simular el jack conectado)

    //control de cables conectados
    let connections = [];
    wires.forEach(() => connections.push(null));

    // Dibuja el juego
    function drawGame() {
      // Color de fondo para generar un borde
      ctx.fillStyle = "#888";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      // Imagen de fondo del canvas
      ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);

      // Dibuja los cuadros de abajo y los cables conectados
      wires.forEach((wire, i) => {
        //Dibuja el area de cada uno de los cuadros de abajo
        drawRect(wire.color, WAWidth * i, canvasHeight - WAHeight, WAWidth, WAHeight);
        //Dibuja los cables conectados
        if (connections[i] !== null) {
          // Se calcula 2/3 del jack ya que al estar conectado no se ve todo el jack
          let jackSize = jackSizeH * 0.66;
          if (config.theme.name === THEMES.ANCIENT) jackSize = jackSizeH;
          drawLine(
            wire.color,
            i * WAWidth + WAWidth / 2,
            canvasHeight - WAHeight,
            connections[i] * WAWidth + WAWidth / 2,
            WAHeight + jackSize,
          );
          // Si el cable no está conectado dibuja el jack en el area de abajo
        } else {
          if (selectedWireIndex !== i) {
            ctx.drawImage(
              preloadedImages[i],
              i * WAWidth + WAWidth / 2 - jackSizeW / 2,
              canvasHeight - WAHeight - jackSizeH / 2,
              jackSizeW,
              jackSizeH,
            );
          }
        }
        //Dibuja el texto o la imagen de la etiqueta
        drawLabel(wire, i, canvasHeight - WAHeight / 2, "");
      });
      // Dibujar los cuadros de arriba
      targets.forEach((target, i) => {
        //Dibuja el area de cada uno de los cuadros de arriba
        drawRect(target.colorArea, WAWidth * i, 0, WAWidth, WAHeight);

        const xPosition = i * WAWidth + WAWidth / 2;
        const imgOffset = connectorImgSize / 2;
        //Dibuja el conector del area de arriba
        ctx.drawImage(connectorImg, xPosition - imgOffset, WAHeight - imgOffset, connectorImgSize, connectorImgSize);

        //Dibuja el texto o la imagen de la etiqueta
        drawLabel(target, i, WAHeight / 2, " target");

        //obtener el índice del "jack" conectado
        let connected = null;
        connections.forEach((con, idx) => {
          if (con === i) connected = idx;
        });

        //Dibujar el "jack" conectado
        if (connected !== null) {
          const x = xPosition - connectedJackWidth / 2;
          const y = WAHeight;
          if (config.theme.name === THEMES.ANCIENT) {
            ctx.drawImage(preloadedImages[connected], x - jackSizeW * 0.37, y, jackSizeW, jackSizeH);
          } else {
            const radius = connectedJackWidth / 2;
            //Simula el rectangulo del jack conectado
            ctx.fillStyle = wires[connected].color;
            ctx.fillRect(x, y + radius, connectedJackWidth, connectedJackHeight - radius);
            ctx.beginPath();
            // Dibuja una esfera en la parte superior del rectángulo para simular el jack conectado
            ctx.arc(x + connectedJackWidth / 2, y + radius, radius, Math.PI, 0, false);
            ctx.closePath();
            ctx.fill();
          }
        }
      });

      // Dibujar la línea actual si se está arrastrando
      if (selectedWireIndex > -1) {
        try {
          //Dibuja la linea arrastrandose
          drawLine(
            wires[selectedWireIndex].color,
            selectedWireIndex * WAWidth + WAWidth / 2,
            canvasHeight - WAHeight,
            mouseX,
            mouseY,
          );
          //Dibuja la imagen del jack en la punta del cable arrastrandose
          ctx.drawImage(
            preloadedImages[selectedWireIndex],
            mouseX - jackSizeW / 2,
            mouseY - jackSizeH,
            jackSizeW,
            jackSizeH,
          );
        } catch (e) {
          console.error("Error al dibujar la línea:", e);
        }
      }
    }

    // Dibuja un rectángulo
    function drawRect(color, x, y, w, h) {
      // fill según el tema
      if (config.theme.name === THEMES.BASIC) {
        ctx.fillStyle = "#2d1f1c";
        ctx.strokeStyle = "black";
      } else if (config.theme.name === THEMES.FUTURISTIC) {
        ctx.fillStyle = "#12102d";
        ctx.strokeStyle = "#8863a3";
      } else if (config.theme.name === THEMES.ANCIENT) {
        ctx.fillStyle = "#7f482f";
        ctx.strokeStyle = "black";
      }

      ctx.fillRect(x, y, w, h);
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
    }

    // Dibuja una línea entre dos puntos
    function drawLine(color, x1, y1, x2, y2) {
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 + 50; // Se suma para dar curvatura

      // Gradiente para dar sensación de textura
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, shadeColor(color, -40));
      gradient.addColorStop(0.5, shadeColor(color, 40));
      gradient.addColorStop(1, shadeColor(color, -40));

      //Dibuja el cable pasandole el estilo, opacidad y el grosor del cable
      const draw = (style, alpha = 1, width = wireWidth) => {
        ctx.strokeStyle = style;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX, midY, x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      };

      draw(shadeColor(color, -50), 1, wireWidth + wireWidth * 0.2); // borde de el cable
      if (config.theme.name === THEMES.ANCIENT) draw(ropePattern); // patrón textura cuerda
      draw(gradient, 0.6); // cable
    }

    // Función para oscurecer o aclarar un color en formato hexadecimal
    function shadeColor(color, percent) {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);

      R = Math.min(255, Math.max(0, R + percent));
      G = Math.min(255, Math.max(0, G + percent));
      B = Math.min(255, Math.max(0, B + percent));

      return `rgb(${R}, ${G}, ${B})`;
    }

    // pinta la etiqueta(texto o imagen)
    function drawLabel(wire, i, yPosition, imgFlag) {
      const xPosition = i * WAWidth + WAWidth / 2; // Posición X del area
      // si tiene una imagen la dibuja
      if (wire.image || wire.ico) {
        const imgOffset = labelImgSize / 2; // Offset para centrar la imagen
        const img = wire.image ? preloadedImages[i + "img" + imgFlag] : preloadedImages[i + "ico" + imgFlag];
        ctx.drawImage(img, xPosition - imgOffset, yPosition - imgOffset, labelImgSize, labelImgSize);
      } else {
        //En caso de no tener imagen dibuja el texto
        ctx.fillStyle = "#e8d5b0";
        ctx.font = fontSize;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(wire.label, xPosition, yPosition, WAWidth);
      }
    }

    // Funcion para gaurdar las cordenadas del ratón
    const mouseMoveHandler = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) * (canvasWidth / rect.width);
      mouseY = (e.clientY - rect.top) * (canvasHeight / rect.height);
    };

    // Funcion que se ejecuta al presionar el click
    const mouseDownHandler = () => {
      const index = Math.floor(mouseX / WAWidth); // indice de la seccion
      const tIndex = connections.indexOf(index); // posible indice de el cable conectado

      // Si el ratón está en la parte inferior del canvas, selecciona el cable
      if (mouseY > canvasHeight - WAHeight - 35) {
        if (connections[index] !== null) {
          connections[index] = null;
        }
        selectedWireIndex = index;
        pickWireAudio.play();

        // Si el ratón está en la parte superior del canvas, desconecta el cable
      } else if (mouseY < WAHeight + 35 && tIndex !== null && tIndex !== -1) {
        selectedWireIndex = tIndex;
        connections[tIndex] = null;
      }
    };

    // Funcion que se ejecuta al soltar el click
    const mouseUpHandler = () => {
      // Detecta el ratón está en la parte superior del canvas (area de los targets)
      if (mouseY < WAHeight + 100) {
        const index = Math.floor(mouseX / WAWidth); // indice de la seccion
        const tIndex = connections.indexOf(index); // posible indice de el cable conectado
        // Detecta si estar arrastrando un cable
        if (selectedWireIndex !== -1) {
          // Si la seccion ya tenia un cable conectado, lo desconecta
          if (tIndex !== null && tIndex !== -1) {
            connections[tIndex] = null;
          }
          //Conectas el cable en su seccion correspondiente
          connections[selectedWireIndex] = index;
          setConnections(connections);
          plugWireAudio.play(); // Reproduce el sonido de conectar el cable
        }
      }
      // En cualquier caso, al soltar el click se deja de arrastrar el cable si lo haciamos
      selectedWireIndex = -1;
    };

    // Bindea los eventos del ratón al canvas
    canvas.addEventListener("mousemove", mouseMoveHandler);
    canvas.addEventListener("mousedown", mouseDownHandler);
    canvas.addEventListener("mouseup", mouseUpHandler);

    // Bucle de animación para actualizar la pantalla
    function loop() {
      requestAnimationFrame(loop);
      drawGame();
    }

    loop();
    // Limpia los eventos al desmontar el componente
    return () => {
      canvas.removeEventListener("mousemove", mouseMoveHandler);
      canvas.removeEventListener("mousedown", mouseDownHandler);
      canvas.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [preloadedImages, size]);

  return (
    <>
      <canvas ref={canvasRef} id="gameCanvas" className={`canvas-${config.theme.name}`} />
      <audio id="audio_pick-wire" src={config.theme.wireAudio} autostart="false" preload="auto" />
      <audio id="audio_plug-wire" src={config.theme.dropWireAudio} autostart="false" preload="auto" />
    </>
  );
};

export default FixWiringGame;
