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

  let marginLeft = 0.041;
  let marginTop = 0.04;
  let fWidth = 1.05;
  let fHeight = 1.08;
  let switchMargin = 0.772;

  switch (config.skin) {
    case "RETRO":
      marginLeft = 0.05;
      marginTop = 0.055;
      fWidth = 1;
      fHeight = 1;
      switchMargin = 0.76;

      break;
    case "FUTURISTIC":
      marginLeft = 0.035;
      marginTop = -0.01;
      fWidth = 0.919;
      fHeight = 0.8;
      switchMargin = 0.77;

      break;
  }

  useEffect(() => {
    if (config.wires && config.wires.length > 0) {
      setConnections(config.wires.map(() => null));
    }
  }, [config.wires]);

  useEffect(() => {
    if (solution) {
      const solutionParsed = solution.split(";").map((s) => (s === "" ? null : Number(s) - 1));

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
        }}
      >
        <div
          className="wires"
          style={{ marginLeft: -size.height * marginLeft + size.width * 0.024, marginTop: -size.height * marginTop }}
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
        <div
          style={{
            height: size.height * 0.18,
            width: size.height * 0.18,
            marginLeft: size.width * switchMargin,
            position: "absolute",
            zIndex: 20,
            backgroundImage: `url(${config.switchBackgroundImg})`,
            backgroundSize: "cover",
          }}
        >
          <Switch solved={solved} onClick={click} solvedTrigger={solvedTrigger} theme={config} size={size} />
        </div>
        <img
          style={{
            position: "absolute",
            pointerEvents: "none",
            height: size.height * fHeight,
            zIndex: 10,
            width: size.width * fWidth,
          }}
          src={config.frameImg}
        />
      </div>
    </div>
  );
}
