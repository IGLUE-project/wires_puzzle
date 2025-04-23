import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import FixWiringGame from "./Wires";

export default function MainScreen({ show, config, solvePuzzle, solved, solvedTrigger }) {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (config.wires && config.wires.length > 0) {
      setConnections(config.wires.map(() => null));
    }
  }, [config.wires]);
  const click = () => {
    solvePuzzle(connections);
  };

  return (
    <div id="MainScreen" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      <img className="bg-image" src={config.theme.backgroundImgCloseUp}></img>
      <div className="frame">
        <div className="wires">
          {connections.length > 0 && (
            <FixWiringGame config={config} connections={connections} setConnections={setConnections} />
          )}
        </div>
        <img className="panelopen" src={config.theme.panelOpenImg} alt="panel electrico abierto" />
      </div>
      <Switch solved={solved} onClick={click} solvedTrigger={solvedTrigger} theme={config.theme} />
    </div>
  );
}
