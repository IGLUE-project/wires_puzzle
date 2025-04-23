import { useEffect, useRef, useState } from "react";
import "../assets/scss/Wires.scss";
import { jackIcon } from "../icons/wiresIcons";
import ReactDOMServer from "react-dom/server";

const canvasWidth = 1010;
const canvasHeight = 1000;
let mouseX = 0;
let mouseY = 0;

const preloadIcons = async (wires) => {
  const imagePromises = [];
  const images = {};

  wires.forEach((wire, i) => {
    const color = wire.color;
    const svgString = ReactDOMServer.renderToString(jackIcon({ width: 60, height: 60, color }));
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.src = url;

    // Creamos una promesa que se resuelve cuando la imagen se carga
    const loadImagePromise = new Promise((resolve) => {
      img.onload = () => {
        images[i] = img;
        URL.revokeObjectURL(url);
        resolve();
      };
    });

    imagePromises.push(loadImagePromise); // Añadimos la promesa al array
  });

  // Devolvemos una promesa que se resuelve cuando todas las imágenes se hayan cargado
  await Promise.all(imagePromises);
  return images; // Retorna el objeto `images` cuando todo se haya cargado
};

const FixWiringGame = ({ config, setConnections }) => {
  const canvasRef = useRef(null);
  const [iconImages, setIconImages] = useState(null);

  const boltImg = new Image();
  boltImg.src = config.theme.connectionImg;
  const backgroundImg = new Image();
  backgroundImg.src = config.theme.panelBackgroundImg;

  useEffect(() => {
    const loadIcons = async () => {
      const images = await preloadIcons(config.wires);
      setIconImages(images);
    };

    loadIcons();
  }, [config.wires]);

  useEffect(() => {
    if (!iconImages) return;
    const pickWireAudio = document.getElementById("audio_pick-wire");
    const plugWireAudio = document.getElementById("audio_plug-wire");

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //Cables reordenados en funcion del target (para lso cuadros de arriba)
    const wires = config.wires;
    const targets = config.target;
    let selectedWireIndex = -1;
    let gameCompleted = false;
    //Wire Area width/height
    const WAWidth = canvasWidth / wires.length;
    const WAHeight = 150;

    let connections = [];
    wires.forEach(() => connections.push(null));

    // Dibuja el estado del juego
    function drawGame() {
      ctx.fillStyle = "#888";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);

      // Dibujar los cuadros de abajo y las líneas completadas
      wires.forEach((wire, i) => {
        drawRect(wire.color, WAWidth * i, canvasHeight - WAHeight, WAWidth, WAHeight);
        if (connections[i] !== null) {
          drawLine(
            wire.color,
            i * WAWidth + WAWidth / 2,
            canvasHeight - WAHeight,
            connections[i] * WAWidth + WAWidth / 2,
            WAHeight + 65,
          );
        } else {
          if (selectedWireIndex !== i) {
            ctx.drawImage(iconImages[i], i * WAWidth + WAWidth / 2 - 70, canvasHeight - WAHeight - 50, 140, 100);
          }
        }
        drawLabel(wire, i, canvasHeight - WAHeight / 2);
      });
      // Dibujar los cuadros de arriba
      targets.forEach((target, i) => {
        drawRect(target.colorArea, WAWidth * i, 0, WAWidth, WAHeight);
        ctx.drawImage(boltImg, i * WAWidth + WAWidth / 2 - 30, WAHeight - 30, 60, 60);
        drawLabel(target, i, WAHeight / 2);
        //obtener el índice del "jack" conectado
        let connected = null;
        connections.forEach((con, idx) => {
          if (con === i) connected = idx;
        });
        //Dibujar el "jack" conectado
        if (connected !== null) {
          const x = i * WAWidth + WAWidth / 2 - 15;
          const y = WAHeight + 5;
          const width = 30;
          const height = 60;
          const radius = width / 2;
          ctx.fillStyle = wires[connected].color;
          ctx.fillRect(x, y + radius, width, height - radius);
          ctx.beginPath();
          ctx.arc(x + width / 2, y + radius, radius, Math.PI, 0, false);
          ctx.closePath();
          ctx.fill();
        }
      });

      // Dibujar la línea actual si se está arrastrando
      if (selectedWireIndex > -1) {
        drawLine(
          wires[selectedWireIndex].color,
          selectedWireIndex * WAWidth + WAWidth / 2,
          canvasHeight - WAHeight,
          mouseX,
          mouseY,
        );
        ctx.drawImage(iconImages[selectedWireIndex], mouseX - 70, mouseY - 100, 140, 100);
      }

      if (gameCompleted) {
        //Juego ganado
      }
    }

    // Dibuja un rectángulo
    function drawRect(color, x, y, w, h) {
      //ctx.globalAlpha = 0.5;
      //ctx.fillStyle = color ? color : "#3b3b3b";

      ctx.fillStyle = "#3b3b3b";
      ctx.fillRect(x, y, w, h);
      // ctx.globalAlpha = 1.0;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
    }

    // Dibuja una línea entre dos puntos
    function drawLine(color, x1, y1, x2, y2) {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);

      // Generar colores más oscuros y más claros del color base
      const darkerColor = shadeColor(color, -40); // Más oscuro
      const lighterColor = shadeColor(color, 40); // Más claro

      gradient.addColorStop(0, darkerColor); // Extremo más oscuro
      gradient.addColorStop(0.5, lighterColor); // Centro más claro
      gradient.addColorStop(1, darkerColor); // Otro extremo oscuro

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 + 50; // Agrega un poco de curvatura

      // Primero dibujamos el borde negro
      ctx.strokeStyle = "black";
      ctx.lineWidth = 25; // Un poco más grueso que el borde principal para que se vea bien
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();

      // Luego dibujamos la línea con el gradiente
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 20; // El grosor real de la línea
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();
    }

    function shadeColor(color, percent) {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);

      R = Math.min(255, Math.max(0, R + percent));
      G = Math.min(255, Math.max(0, G + percent));
      B = Math.min(255, Math.max(0, B + percent));

      return `rgb(${R}, ${G}, ${B})`;
    }

    function drawLabel(wire, i, yPosition) {
      ctx.fillStyle = "white";
      ctx.font = "50px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      if (wire.image) {
        const wireImg = new Image();
        wireImg.src = wire.image;
        ctx.drawImage(wireImg, i * WAWidth + WAWidth / 2 - 35, yPosition - 35, 70, 70);
      } else {
        ctx.fillText(wire.label, i * WAWidth + WAWidth / 2, yPosition, WAWidth);
      }
    }

    // Manejo del mouse

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) * (canvasWidth / rect.width);
      mouseY = (e.clientY - rect.top) * (canvasHeight / rect.height);
    });

    // Detectar cuando se inicia la conexión
    canvas.addEventListener("mousedown", () => {
      const index = Math.floor(mouseX / WAWidth);
      const tIndex = connections.indexOf(index);
      if (mouseY > canvasHeight - WAHeight - 35) {
        if (connections[index] !== null) {
          connections[index] = null;
        }
        selectedWireIndex = index;
        pickWireAudio.play();
      } else if (mouseY < WAHeight + 35 && tIndex !== null && tIndex !== -1) {
        selectedWireIndex = tIndex;
        connections[tIndex] = null;
      }
    });

    // Detectar cuando se suelta la conexión y validar si es correcta
    canvas.addEventListener("mouseup", () => {
      if (mouseY < WAHeight + 100) {
        const index = Math.floor(mouseX / WAWidth);
        const tIndex = connections.indexOf(index);

        if (tIndex !== null && tIndex !== -1) {
          connections[tIndex] = null;
        }
        if (selectedWireIndex !== -1) {
          connections[selectedWireIndex] = index;
          gameCompleted = checkGameFinish();
          plugWireAudio.play();
        }
      }
      selectedWireIndex = -1;
    });

    function checkGameFinish() {
      for (let i = 0; i < connections.length; i++) {
        if (connections[i] === null) {
          return false;
        }
      }
      setConnections(connections);
      return true;
    }

    // Bucle de animación para actualizar la pantalla
    function loop() {
      requestAnimationFrame(loop);
      drawGame();
    }

    loop();
  }, [iconImages]);

  return (
    <>
      <canvas ref={canvasRef} id="gameCanvas" />
      <audio id="audio_pick-wire" src={config.theme.wireAudio} autostart="false" preload="auto" />
      <audio id="audio_plug-wire" src={config.theme.dropWireAudio} autostart="false" preload="auto" />
    </>
  );
};

export default FixWiringGame;
