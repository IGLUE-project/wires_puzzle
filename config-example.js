//Copy this file to config.js and specify your own settings

import { THEMES } from "./src/constants/constants";

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: THEMES.BASIC, //skin can be "STANDARD", "RETRO" or "FUTURISTIC" or "BASIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionAfterSolve: "LOAD_SOLUTION", //actionAfterSolve can be "NONE" or "LOAD_SOLUTION".
  //message: "Custom message",

  //type: can be "LETTERS", "NUMBERS", "SHAPES", "COLORED SHAPES", "COLORS", "CUSTOM".
  //areaColor: can be a color or "RAINBOW" for a rainbow gradient.

  wires: [
    {
      color: "#91933D",
      areaColor: "",
      label: "👽",
      image: "",
    },
    {
      color: "#645B90",
      areaColor: "",
      label: "cable 1",
      image: "/src/assets/images/estrella.svg",
    },
    {
      color: "#9C5425",
      areaColor: "#0021c7",
      label: "cable 2",
      image: "",
    },
    {
      color: "#CD717C",
      areaColor: "",
      label: "cable 3",
      image: "",
      ico: "square",
      colorIco: "purple",
    },
    {
      color: "#9C5425",
      areaColor: "#0021c7",
      label: "cable 2",
      image: "",
    },
    {
      color: "#CD717C",
      areaColor: "",
      label: "cable 3",
      image: "",
      ico: "square",
      colorIco: "purple",
    },
  ],
  target: [
    {
      areaColor: "#3abf19",
      label: "5",
      image: "",
      ico: "triangle",
    },
    {
      areaColor: "#c70000",
      label: "target 1",
      image: "",
    },
    {
      areaColor: "#0021c7",
      label: "target 2",
      image: "/src/assets/images/circulo.png",
    },
    {
      areaColor: "#c700b5",
      label: "target 3",
      image: "",
      ico: "square",
      colorIco: "red",
    },
    {
      areaColor: "#c700b5",
      label: "target 3",
      image: "",
    },
    {
      areaColor: "#c700b5",
      label: "target 3",
      image: "",
    },
  ],

  //Settings that will be automatically specified by the Escapp server
  // solutionLength: 3,
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.etsisi.upm.es/api/escapeRooms/153",
    linkedPuzzleIds: [3],
    rtc: false,
  },
};
