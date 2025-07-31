import { iconMap } from "../icons/wiresIcons";

export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionWhenLoadingIfSolved: true,
  message: undefined,
  wires: [],
  customWires: [],
  targets: [],
  customTargets: [],
  customSources: [],
  wiresType: "COLORED",
  sourcesType: "LETTERS",
  targetsType: "NUMBERS",
  wiresColor: "",
  wiresLength: 6,
  backgroundImg: "",
  panelBackgroundImg: "images/box_background_basic.jpg",
  connectionImg: "images/female-jack.png",
  switchOnImg: "images/basic_switch_on.png",
  switchOffImg: "images/basic_switch_off.png",
  wireAudio: "sounds/pick-wire.wav",
  dropWireAudio: "sounds/plug-wire.mp3",
  switchAudio: "sounds/switch1.wav",
  switchDownAudio: "sounds/switch2.wav",
  failAudio: "sounds/fail-connection.wav",
  connectionAudio: "sounds/connection.wav",
  wire: iconMap.jack,
};

export const THEMES = {
  STANDARD: "STANDARD",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const TYPES = {
  LETTERS: "LETTERS",
  NUMBERS: "NUMBERS",
  SHAPES: "SHAPES",
  COLORED_SHAPES: "COLORED_SHAPES",
  CUSTOM: "CUSTOM",
};

export const WIRE_TYPES = {
  COLORED: "COLORED",
  MONOCHROME: "MONOCHROME",
  CUSTOM: "CUSTOM",
};

export const ICONS = [
  "Circle",
  "Triangle",
  "Square",
  "Pentagon",
  "Star",
  "Hexagon",
  "Clubs",
  "Diamonds",
  "Hearts",
  "Spades",
  "Moon",
  "Puzzle",
  "Sun",
  "Rhombus",
];
export const COLORS = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Pink",
  "Cyan",
  "Purple",
  "Brown",
  "Black",
  "Gray",
  "White",
  "Turquoise",
  "Lime",
];

export const THEME_ASSETS = {
  [THEMES.RETRO]: {
    backgroundImg: "images/ancient_wires_puzzle_bg.jpg",
    panelBackgroundImg: "images/box_background_ancient.png",
    connectionImg: "images/rope_svg_end_ancient.svg",
    switchOnImg: "images/ancient_switch_on.png",
    switchOffImg: "images/ancient_switch_off.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/plug-wire.mp3",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.rope,
  },
  [THEMES.STANDARD]: {
    backgroundImg: "images/basic_wires_puzzle_bg.jpg",
    panelBackgroundImg: "images/box_background_basic.jpg",
    connectionImg: "images/female-jack.png",
    switchOnImg: "images/basic_switch_on.png",
    switchOffImg: "images/basic_switch_off.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.jack,
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_wires_puzzle_bg.jpg",
    panelBackgroundImg: "images/box_background_futuristic.png",
    connectionImg: "images/female-jack.png",
    wireAudio: "sounds/pick-wire.wav",
    switchOnImg: "images/futuristic_switch_on.png",
    switchOffImg: "images/futuristic_switch_off.png",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.jack,
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
