import { useEffect, useRef } from "react";
import "../assets/scss/Wires.scss";

const boltImg = new Image();
boltImg.src = "/src/assets/images/bolt.png";
const backgroundImg = new Image();
backgroundImg.src = "/src/assets/images/background.jpg";

const canvasWidth = 1010;
const canvasHeight = 1000;
let mouseX = 0;
let mouseY = 0;

const FixWiringGame = ({ wires }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Variables principales
    let completedConnections = [];
    const wireColors = wires.map((wire) => wire.color);
    const shuffledColors = wires
      .toSorted((a, b) => a.target - b.target) // Ordena por target
      .map((wire) => wire.color);
    let selectedWireIndex = -1;
    let gameCompleted = false;
    const cableWidth = canvasWidth / wires.length;
    const cableAreaHeight = 150;

    // Dibuja el estado del juego
    function drawGame() {
      ctx.fillStyle = "#888";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
      // Dibujar la línea actual si se está arrastrando
      if (selectedWireIndex > -1) {
        drawLine(
          wires[selectedWireIndex].color,
          selectedWireIndex * cableWidth + cableWidth / 2,
          canvasHeight - cableAreaHeight,
          mouseX,
          mouseY,
        );
      }

      // Dibujar los cuadros de abajo y las líneas completadas
      wireColors.forEach((color, i) => {
        drawRect(color, cableWidth * i, canvasHeight - cableAreaHeight, cableWidth, cableAreaHeight);
        if (completedConnections[i]) {
          drawLine(
            color,
            i * cableWidth + cableWidth / 2,
            canvasHeight - cableAreaHeight,
            shuffledColors.indexOf(color) * cableWidth + cableWidth / 2,
            cableAreaHeight,
          );
        }
        ctx.drawImage(boltImg, i * cableWidth + cableWidth / 2 - 35, canvasHeight - cableAreaHeight - 35, 70, 70);
      });
      // Dibujar los cuadros de arriba
      shuffledColors.forEach((color, i) => {
        drawRect(color, cableWidth * i, 0, cableWidth, cableAreaHeight);
        ctx.drawImage(boltImg, i * cableWidth + cableWidth / 2 - 35, cableAreaHeight - 35, 70, 70);
      });

      // Escribir el texto
      wires.forEach((wire, i) => drawLabel(wire, i));

      // Mostrar "Done" si se completó el juego
      if (gameCompleted) {
        ctx.fillStyle = "black";
        ctx.font = "48px Arial";
        ctx.fillText("Done", canvasWidth / 2 - 50, canvasHeight / 2);
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

    function drawLabel(wire, i, img) {
      ctx.fillStyle = "white";
      ctx.font = "50px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const wireImg = new Image();

      if (wire.image) {
        wireImg.src = wire.image;
        ctx.drawImage(wireImg, i * cableWidth + cableWidth / 2 - 35, canvasHeight - cableAreaHeight / 2 - 35, 70, 70);
      } else {
        ctx.fillText(wire.label, i * cableWidth + cableWidth / 2, canvasHeight - cableAreaHeight / 2, cableWidth);
      }
      if (wire.targetImage) {
        wireImg.src = wire.targetImage;
        ctx.drawImage(
          wireImg,
          shuffledColors.indexOf(wire.color) * cableWidth + cableWidth / 2 - 35,
          cableAreaHeight / 2 - 35,
          70,
          70,
        );
      } else {
        ctx.fillText(
          wire.targetLabel,
          shuffledColors.indexOf(wire.color) * cableWidth + cableWidth / 2,
          cableAreaHeight / 2,
          cableWidth,
        );
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
      if (
        mouseY > canvasHeight - cableAreaHeight - 35 &&
        !completedConnections[(selectedWireIndex = Math.floor(mouseX / cableWidth))]
      ) {
        selectedWireIndex = Math.floor(mouseX / cableWidth);
      }
    });

    // Detectar cuando se suelta la conexión y validar si es correcta
    canvas.addEventListener("mouseup", () => {
      console.log(`Mouse x:${mouseX} y:${mouseY}`);
      if (
        mouseY < cableAreaHeight &&
        shuffledColors[Math.floor(mouseX / cableWidth)] === wireColors[selectedWireIndex]
      ) {
        completedConnections[selectedWireIndex] = true;
        gameCompleted = completedConnections.filter((a) => a).length === wireColors.length;
      }
      selectedWireIndex = -1;
    });

    // Bucle de animación para actualizar la pantalla
    function loop() {
      requestAnimationFrame(loop);
      drawGame();
    }

    loop();
  }, []);

  return <canvas ref={canvasRef} id="gameCanvas" />;
};

export default FixWiringGame;
