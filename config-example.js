//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "RETRO", //skin can be "STANDARD", "RETRO", or "FUTURISTIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionWhenLoadingIfSolved: true,
  wiresType: "COLORS", //wiresType can be "LETTERS", "NUMBERS", "SHAPES", "COLORED_SHAPES", "COLORS" or "CUSTOM".
  targetsType: "COLORS", //targetsType can be "LETTERS", "NUMBERS", "SHAPES", "COLORED SHAPES", "COLORS" or "CUSTOM".
  wiresLength: 6, //the number of wires and targets.

  // customWires: [
  //   {
  //     color: "#91933D",
  //     areaColor: "",
  //     label: "👽",
  //     image: "",
  //   },
  //   {
  //     color: "#645B90",
  //     areaColor: "",
  //     label: "cable 1",
  //     image: "images/estrella.svg",
  //   },
  //   {
  //     color: "#9C5425",
  //     areaColor: "#0021c7",
  //     label: "cable 2",
  //     image: "",
  //   },
  //   {
  //     color: "#CD717C",
  //     areaColor: "",
  //     label: "cable 3",
  //     image: "",
  //     ico: "Square",
  //     colorIco: "purple",
  //   },
  //   {
  //     color: "#9C5425",
  //     areaColor: "#0021c7",
  //     label: "cable 2",
  //     image: "",
  //   },
  //   {
  //     color: "#CD717C",
  //     areaColor: "",
  //     label: "cable 3",
  //     image: "",
  //     ico: "Square",
  //     colorIco: "purple",
  //   },
  // ],
  // customTargets: [
  //   {
  //     areaColor: "#3abf19",
  //     label: "5",
  //     image: "",
  //     ico: "Triangle",
  //   },
  //   {
  //     areaColor: "#c70000",
  //     label: "target 1",
  //     image: "",
  //   },
  //   {
  //     areaColor: "#0021c7",
  //     label: "target 2",
  //     image: "images/circulo.png",
  //   },
  //   {
  //     areaColor: "#c700b5",
  //     label: "target 3",
  //     image: "",
  //     ico: "Square",
  //     colorIco: "red",
  //   },
  //   {
  //     areaColor: "#c700b5",
  //     label: "target 3",
  //     image: "",
  //   },
  //   {
  //     areaColor: "#c700b5",
  //     label: "target 3",
  //     image: "",
  //   },
  // ],

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};