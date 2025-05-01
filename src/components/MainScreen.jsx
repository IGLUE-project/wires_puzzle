import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import FixWiringGame from "./Wires";

export default function MainScreen({ show, config, solvePuzzle, solved, solvedTrigger }) {
  const [connections, setConnections] = useState([]);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (config.wires && config.wires.length > 0) {
      setConnections(config.wires.map(() => null));
    }
  }, [config.wires]);

  const click = () => {
    solvePuzzle(connections);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="MainScreen" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      {/* <img className="bg-image" src={config.theme.backgroundImgCloseUp}></img> */}
      <div
        className="frame"
        style={{ backgroundImage: `url(${config.theme.backgroundImgCloseUp})`, height: "100%", width: "100%" }}
      >
        <div className="wires">
          {connections.length > 0 && (
            <FixWiringGame config={config} connections={connections} setConnections={setConnections} size={size} />
          )}
        </div>
        {/* <img
          className="panelopen"
          src={config.theme.panelOpenImg}
          // style={{ height: size.height * 0.7, width: size.width * 0.8 }}
          alt="panel electrico abierto"
        /> */}
        {/* <div className="switch" style={{ height: size.height * 0.1, width: size.width * 0.1 }}>
        </div> */}
        <Switch solved={solved} onClick={click} solvedTrigger={solvedTrigger} theme={config.theme} size={size} />
      </div>
    </div>
  );
}
