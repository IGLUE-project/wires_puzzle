//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO", or "FUTURISTIC"
  // backgroundImg: "NONE", //backgroundImg can be "NONE" or a URL.
  actionWhenLoadingIfSolved: true,

  wiresLength: 6, //the number of wires and targets.
  wiresType: "COLORED", //wiresType can be "COLORED", "MONOCHROME" or "CUSTOM".
  //wiresColor: "black", //color of the wires if wiresType is MONOCHROME
  sourcesType: "NONE", //sourcesType can be "LETTERS", "NUMBERS", "SHAPES", "COLORED_SHAPES", "NONE" or "CUSTOM".
  targetsType: "NONE", //targetsType can be "LETTERS", "NUMBERS", "SHAPES", "COLORED_SHAPES", "NONE" or "CUSTOM".

  //If wiresType is CUSTOM, customWires should be specified.
  // customWires: [
  //   {
  //     color: "#91933D",
  //   },
  //   {
  //     color: "#3d4a93ff",
  //   },
  //   {
  //     color: "#91933D",
  //   },
  //   {
  //     color: "#91933D",
  //   },
  //   {
  //     color: "#91933D",
  //   },
  //   {
  //     color: "#91933D",
  //   },
  // ],

  //If sourcesType is CUSTOM, customSources should be specified.
  // customSources: [
  //   {
  //     label: "👽",
  //     image: "",
  //   },
  //   {
  //     label: "cable 1",
  //   },
  //   {
  //     label: "cable 2",
  //     image: "",
  //   },
  //   {
  //     label: "cable 3",
  //     image: "",
  //     ico: "Square",
  //   },
  //   {
  //     label: "cable 2",
  //     image: "",
  //   },
  //   {
  //     label: "cable 3",
  //     image: "",
  //     ico: "Square",
  //     colorIco: "purple",
  //   },
  // ],

  //If targetsType is CUSTOM, customTargets should be specified.
  // customTargets: [
  //   {
  //     label: "5",
  //     image: "",
  //     ico: "Triangle",
  //   },
  //   {
  //     label: "target 1",
  //     image: "",
  //   },
  //   {
  //     label: "target 2",
  //     image: "",
  //   },
  //   {
  //     label: "target 3",
  //     image: "",
  //     ico: "Square",
  //     colorIco: "red",
  //   },
  //   {
  //     label: "target 3",
  //     image: "",
  //   },
  //   {
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