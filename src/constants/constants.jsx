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
    backgroundImg: "/src/assets/images/background_ancient.png",
    backgroundImgCloseUp: "/src/assets/images/background_closeup_ancient.png",
    panelImg: "/src/assets/images/box_ancient.png",
    panelOpenImg: "/src/assets/images/box_ancient.png",
    panelBackgroundImg: "/src/assets/images/box_background_ancient.png",
    wireImg: "/src/assets/images/wire_ancient.png",
    connectionImg: "/src/assets/images/female-jack.png",
    switchContainerImg: "",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
  [THEMES.BASIC]: {
    backgroundImg: "/src/assets/images/background_basic.png",
    backgroundImgCloseUp: "/src/assets/images/background_closeup_basic.png",
    panelImg: "/src/assets/images/box_basic.png",
    panelOpenImg: "/src/assets/images/box_basic.png",
    panelBackgroundImg: "/src/assets/images/box_background_basic.jpg",
    wireImg: "",
    connectionImg: "/src/assets/images/female-jack.png",
    switchContainerImg: "/src/assets/images/switch_container.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
  [THEMES.CONTEMPORARY]: {
    backgroundImg: "",
    backgroundImgCloseUp: "",
    panelImg: "/src/assets/images/panel_electrico.png",
    panelOpenImg: "/src/assets/images/panel_electrico_abierto.png",
    panelBackgroundImg: "/src/assets/images/panel_background.png",
    wireImg: "",
    connectionImg: "/src/assets/images/female-jack.png",
    switchContainerImg: "/src/assets/images/switch_container.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "/src/assets/images/background_futuristic.png",
    backgroundImgCloseUp: "/src/assets/images/background_closeup_futuristic.png",
    panelImg: "/src/assets/images/box_futuristic.png",
    panelOpenImg: "/src/assets/images/box_futuristic.png",
    panelBackgroundImg: "/src/assets/images/box_background_futuristic.png",
    wireImg: "",
    connectionImg: "/src/assets/images/female-jack.png",
    wireAudio: "sounds/pick-wire.wav",
    switchContainerImg: "/src/assets/images/switch_container.png",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
};
