import React, { useEffect, useState } from "react";
import "../assets/scss/Switch.scss";

const Switch = ({ onClick, solved, solvedTrigger, theme, size }) => {
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
    <div
      className="Switch"
      id={`switch-${theme.name}`}
      style={{
        height: size.height * 0.1,
        marginTop: size.height * 0.04,
        backgroundImage: `url(${theme.switchContainerImg})`,
      }}
    >
      <div className="led-box" style={{ marginTop: -size.height * 0.04, height: size.height * 0.04 }}>
        <div
          style={{ height: size.height * 0.03, width: size.height * 0.03 }}
          className={solved ? "led-green" : activo ? (error ? "led-red" : "led-load") : "led-off"}
        ></div>
      </div>
      <img
        className="switch-img"
        src={activo ? theme.switchOnImg : theme.switchOffImg}
        alt=""
        onClick={togglePalanca}
      />

      <audio id="audio_connection" src={theme.connectionAudio} autostart="false" preload="auto" />
      <audio id="audio_fail-connection" src={theme.failAudio} autostart="false" preload="auto" />
      <audio id="audio_switch1" src={theme.switchAudio} autostart="false" preload="auto" />
      <audio id="audio_switch2" src={theme.switchDownAudio} autostart="false" preload="auto" />
    </div>
  );
};

export default Switch;
