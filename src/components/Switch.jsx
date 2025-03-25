import React, { useEffect, useState } from "react";
import "../assets/scss/Switch.scss";

const Switch = ({ onClick, solved, solvedTrigger }) => {
  const [activo, setActivo] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (solvedTrigger > 0) {
      if (!solved) {
        setError(true);
        setTimeout(() => {
          setError(false);

          setActivo(false);
          document.getElementById("audio_switch2").play();
          document.getElementById("audio_fail-connection").play();
        }, 500);
      } else {
        document.getElementById("audio_connection").play();
      }
    }
  }, [solved, solvedTrigger]);

  const togglePalanca = () => {
    if (!activo) {
      setActivo(!activo);
      document.getElementById("audio_switch1").play();
      onClick();
    }
  };

  return (
    <div className="Switch" onClick={togglePalanca}>
      <div className="led-box">
        <div className={solved ? "led-green" : activo ? (error ? "led-red" : "led-load") : "led-off"}></div>
      </div>
      <div className="switchContainer">
        <div className={`lever ${activo ? "active" : ""}`}></div>
        <div className="handle"></div>
      </div>

      <audio id="audio_connection" src="sounds/connection.wav" autostart="false" preload="auto" />
      <audio id="audio_fail-connection" src="sounds/fail-connection.wav" autostart="false" preload="auto" />
      <audio id="audio_switch1" src="sounds/switch1.wav" autostart="false" preload="auto" />
      <audio id="audio_switch2" src="sounds/switch2.wav" autostart="false" preload="auto" />
    </div>
  );
};

export default Switch;
