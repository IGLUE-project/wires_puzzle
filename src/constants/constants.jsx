import { iconMap } from "../icons/wiresIcons";

export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  backgroundImg: "images/background_standard.jpg",
  actionWhenLoadingIfSolved: true,
  wiresLength: 6,
  wiresType: "COLORED",
  wiresColor: "#999",
  sourcesType: "NONE",
  targetsType: "NONE",
  customWires: [],
  customSources: [],
  customTargets: [],

  frameImg: "images/frame_standard.png",
  panelBackgroundImg: "images/box_background_standard.jpg",
  connectionImg: "images/female-jack.png",
  switchOnImg: "images/switch_on_standard.png",
  switchOffImg: "images/switch_off_standard.png",
  wireAudio: "sounds/pick-wire.wav",
  dropWireAudio: "sounds/plug-wire.mp3",
  switchAudio: "sounds/switch1.wav",
  switchDownAudio: "sounds/switch2.wav",
  failAudio: "sounds/fail.wav",
  winAudio: "sounds/win.wav",
  wire: iconMap.jack,
};

export const THEMES = {
  STANDARD: "STANDARD",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const TYPES = {
  NONE: "NONE",
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
  [THEMES.STANDARD]: {
  },
  [THEMES.RETRO]: {
    wiresColor: "#93642f",
    backgroundImg: "images/background_retro.jpg",
    frameImg: "images/frame_retro.png",
    torchOffImg: "images/torch_off.jpg",
    torchOnImg: "images/torch_on.gif",
    panelBackgroundImg: "images/box_background_retro.png",
    connectionImg: "images/rope_end_retro.svg",
    switchOnImg: "images/switch_on_retro.png",
    switchOffImg: "images/switch_off_retro.png",
    winAudio: "sounds/torch.wav",
    fireLoopAudio: "sounds/firesound.wav",
    wire: iconMap.rope,
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/background_futuristic.jpg",
    frameImg: "images/frame_futuristic.png",
    panelBackgroundImg: "images/box_background_futuristic.png",
    switchOnImg: "images/switch_on_futuristic.png",
    switchOffImg: "images/switch_off_futuristic.png",
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};