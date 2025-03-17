import "./../assets/scss/MainScreen.scss";
import FixWiringGame from "./Wires";
import "../assets/scss/MainScreen.scss";

export default function MainScreen({ show, wires }) {
  return (
    <div id="MainScreen" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      <div className="frame">
        <audio id="audio_click" src="sounds/click_button.wav" autostart="false" preload="auto" />
        <div className="wires">
          <FixWiringGame wires={wires} />
        </div>
        <img className="panelopen" src="/src/assets/images/panel_electrico_abierto.png" alt="panel electrico abierto" />
      </div>
    </div>
  );
}
