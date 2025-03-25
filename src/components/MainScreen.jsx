import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import FixWiringGame from "./Wires";

export default function MainScreen({ show, initialConfig, solvePuzzle, solved, solvedTrigger }) {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (initialConfig.wires && initialConfig.wires.length > 0) {
      setConnections(initialConfig.wires.map(() => null));
    }
  }, [initialConfig.wires]);
  const click = () => {
    solvePuzzle(connections);
  };

  return (
    <div id="MainScreen" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      <div className="frame">
        <div className="wires">
          {connections.length > 0 && (
            <FixWiringGame initialConfig={initialConfig} connections={connections} setConnections={setConnections} />
          )}
        </div>
        <img className="panelopen" src="/src/assets/images/panel_electrico_abierto.png" alt="panel electrico abierto" />
      </div>
      <Switch solved={solved} onClick={click} solvedTrigger={solvedTrigger} />
    </div>
  );
}
