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
    backgroundImg: "",
    backgroundImgCloseUp: "",
    panelImg: "/src/assets/images/panel_electrico.png",
    panelOpenImg: "/src/assets/images/panel_electrico_abierto.png",
    panelBackgroundImg: "/src/assets/images/panel-background.jpg",
    wireImg: "",
    connectionImg: "/src/assets/images/bolt.png",
    switchContainerImg: "/src/assets/images/switch_container.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
  [THEMES.BASIC]: {
    backgroundImg: "/src/assets/images/panel_background.png",
    backgroundImgCloseUp: "/src/assets/images/panel_background_closeup.png",
    panelImg: "/src/assets/images/panel_electrico.png",
    panelOpenImg: "/src/assets/images/panel_electrico_abierto.png",
    panelBackgroundImg: "/src/assets/images/panel-background.jpg",
    wireImg: "",
    connectionImg: "/src/assets/images/bolt.png",
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
    panelBackgroundImg: "/src/assets/images/panel-background.jpg",
    wireImg: "",
    connectionImg: "/src/assets/images/bolt.png",
    switchContainerImg: "/src/assets/images/switch_container.png",
    wireAudio: "sounds/pick-wire.wav",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "",
    backgroundImgCloseUp: "",
    panelImg: "/src/assets/images/panel_electrico.png",
    panelOpenImg: "/src/assets/images/panel_electrico_abierto.png",
    panelBackgroundImg: "/src/assets/images/panel-background.jpg",
    wireImg: "",
    connectionImg: "/src/assets/images/bolt.png",
    wireAudio: "sounds/pick-wire.wav",
    switchContainerImg: "/src/assets/images/switch_container.png",
    dropWireAudio: "sounds/plug-wire.mp3",
    switchAudio: "sounds/switch1.wav",
    switchDownAudio: "sounds/switch2.wav",
    failAudio: "sounds/fail-connection.wav",
    connectionAudio: "sounds/connection.wav",
  },
};
