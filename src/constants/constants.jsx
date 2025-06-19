import { iconMap } from "../icons/wiresIcons";

export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionWhenLoadingIfSolved: true,
  message: undefined,

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

export const CONTROL_PANEL_SCREEN = "control_panel";
export const KEYPAD_SCREEN = "keypad";

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};

export const THEMES = {
  BASIC: "BASIC",
  FUTURISTIC: "FUTURISTIC",
  STANDARD: "STANDARD",
  RETRO: "RETRO",
};

export const ICONS = ["circle", "triangle", "square", "pentagon", "star", "hexagon"];

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
  [THEMES.BASIC]: {
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
