import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Switch from "./Switch";
import FixWiringGame from "./Wires";

export default function MainScreen({ config, solvePuzzle, solved, solvedTrigger, solution }) {
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

  useEffect(() => {
    if (solution) {
      const solutionParsed = solution.split(",").map((s) => (s === "-1" ? null : Number(s) - 1));

      if (solutionParsed.length === config.wires.length && solutionParsed.every((s) => s != null))
        setConnections(solutionParsed);
    }
  }, [solution]);

  const click = () => {
    solvePuzzle(connections);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const aspectRatio = 16 / 9;
      let width = windowWidth * 0.9;
      let height = width / aspectRatio;

      if (height > windowHeight * 0.9) {
        height = windowHeight * 0.9;
        width = height * aspectRatio;
      }

      setSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="MainScreen" className={"screen_wrapper"}>
      <div
        className="frame"
        style={{
          backgroundImage: config.backgroundImg ? `url(${config.backgroundImg})` : {},
          height: "100%",
          width: "100%",
          gap: size.width * 0.024,
        }}
      >
        <div
          className="wires"
          style={{ marginLeft: size.height * 0.05 + size.width * 0.024, marginTop: size.height * 0.02 }}
        >
          {connections.length > 0 && (
            <FixWiringGame
              config={config}
              connections={connections}
              setConnections={setConnections}
              size={size}
              solved={solved}
            />
          )}
        </div>
        <Switch solved={solved} onClick={click} solvedTrigger={solvedTrigger} theme={config} size={size} />
      </div>
    </div>
  );
}
