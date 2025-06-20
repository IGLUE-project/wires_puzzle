//Copy this file to config.js and specify your own settings

import { THEMES, TYPES } from "./src/constants/constants";

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: THEMES.FUTURISTIC, //skin can be "STANDARD", "RETRO" or "FUTURISTIC" or "BASIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionWhenLoadingIfSolved: false,
  //message: "Custom message",

  wiresType: TYPES.COLORED_SHAPES,
  targetsType: TYPES.NUMBERS,
  wiresLength: 6,

  customWires: [
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
      image: "images/estrella.svg",
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
      ico: "Square",
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
      ico: "Square",
      colorIco: "purple",
    },
  ],
  customTargets: [
    {
      areaColor: "#3abf19",
      label: "5",
      image: "",
      ico: "Triangle",
    },
    {
      areaColor: "#c70000",
      label: "target 1",
      image: "",
    },
    {
      areaColor: "#0021c7",
      label: "target 2",
      image: "images/circulo.png",
    },
    {
      areaColor: "#c700b5",
      label: "target 3",
      image: "",
      ico: "Square",
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
    // endpoint: "https://escapp.etsisi.upm.es/api/escapeRooms/153",
    endpoint: "https://escapp.es/api/escapeRooms/260",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};
