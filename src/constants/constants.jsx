import { iconMap } from "../icons/wiresIcons";

export const PAINTING_SCREEN = "painting";
export const SAFE_CLOSED_SCREEN = "safe_closed";
export const SAFE_OPEN_SCREEN = "safe_open";
export const CONTROL_PANEL_SCREEN = "control_panel";
export const KEYPAD_SCREEN = "keypad";

export const THEMES = {
  BASIC: "basic",
  FUTURISTIC: "futuristic",
  CONTEMPORARY: "contemporary",
  ANCIENT: "ancient",
};

export const ICONS = ["circle", "triangle", "square", "pentagon", "star", "hexagon"];

export const THEME_ASSETS = {
  [THEMES.ANCIENT]: {
    backgroundImgCloseUp: "/src/assets/images/ancient_wires_puzzle_bg.jpg",
    panelBackgroundImg: "/src/assets/images/box_background_ancient.png",
    connectionImg: "/src/assets/images/rope_svg_end_ancient.svg",
    switchOnImg: "/src/assets/images/ancient_switch_on.png",
    switchOffImg: "/src/assets/images/ancient_switch_off.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/plug-wire.mp3",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.rope,
  },
  [THEMES.BASIC]: {
    backgroundImgCloseUp: "/src/assets/images/basic_wires_puzzle_bg.jpg",
    panelBackgroundImg: "/src/assets/images/box_background_basic.jpg",
    connectionImg: "/src/assets/images/female-jack.png",
    switchOnImg: "/src/assets/images/basic_switch_on.png",
    switchOffImg: "/src/assets/images/basic_switch_off.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.jack,
  },
  [THEMES.CONTEMPORARY]: {
    backgroundImgCloseUp: "/src/assets/images/basic_wires_puzzle_bg.jpg",
    panelBackgroundImg: "/src/assets/images/box_background_basic.jpg",
    connectionImg: "/src/assets/images/female-jack.png",
    switchOnImg: "/src/assets/images/basic_switch_on.png",
    switchOffImg: "/src/assets/images/basic_switch_off.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.jack,
  },
  [THEMES.FUTURISTIC]: {
    backgroundImgCloseUp: "/src/assets/images/futuristic_wires_puzzle_bg.jpg",
    panelBackgroundImg: "/src/assets/images/box_background_futuristic.png",
    connectionImg: "/src/assets/images/female-jack.png",
    wireAudio: "sounds/pick-wire.wav",
    switchOnImg: "/src/assets/images/futuristic_switch_on.png",
    switchOffImg: "/src/assets/images/futuristic_switch_off.png",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
    wire: iconMap.jack,
  },
};
