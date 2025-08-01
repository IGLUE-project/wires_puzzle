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
          document.getElementById("audio_fail").play();
        }, 500);
      } else {
        document.getElementById("audio_win").play();
        if(theme === "RETRO"){
          setTimeout(() => {
            document.getElementById("audio_fire_loop").play();
          }, 2000);
        }
        setActivo(true);
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
      style={{
        height: size.height * 0.1,
        marginTop: size.height * 0.055,
      }}
    >
      {theme.skin === "RETRO" ? (
        <div className="led-box" style={{ marginTop: -size.height * 0.28, height: size.height * 0.28 }}>
          <img
            draggable="false"
            style={{ height: size.height * 0.22, width: size.height * 0.22, objectFit: "contain" }}
            className="torch"
            src={solved ? theme.torchOnImg : theme.torchOffImg}
            alt=""
          />
        </div>
      ) : (
        <div className="led-box" style={{ marginTop: -size.height * 0.06, height: size.height * 0.06 }}>
          <div
            style={{ height: size.height * 0.03, width: size.height * 0.03 }}
            className={solved ? "led-green" : activo ? (error ? "led-red" : "led-load") : "led-off"}
          ></div>
        </div>
      )}

      <img className="switch-img" src={activo ? theme.switchOnImg : theme.switchOffImg} alt="" onClick={togglePalanca} draggable="false" />
      {theme === "RETRO" && ( <audio id="audio_fire_loop" src={theme.fireLoopAudio} autostart="false" preload="auto" loop /> )}
      <audio id="audio_win" src={theme.winAudio} autostart="false" preload="auto" />
      <audio id="audio_fail" src={theme.failAudio} autostart="false" preload="auto" />
      <audio id="audio_switch1" src={theme.switchAudio} autostart="false" preload="auto" />
      <audio id="audio_switch2" src={theme.switchDownAudio} autostart="false" preload="auto" />
    </div>
  );
};

export default Switch;