import React from "react";
import "./../assets/scss/ControlPanel.scss";
import { KEYPAD_SCREEN } from "../constants/constants";

const ControlPanel = ({ show, onOpenScreen, theme }) => {
  return (
    <div id="ControlPanel" className={"screen_wrapper" + (show ? "" : " screen_hidden")}>
      <div className="click-area-wires" onClick={() => onOpenScreen(KEYPAD_SCREEN)}></div>
      {/* <img src={theme.panelImg} className="panel" onClick={() => onOpenScreen(KEYPAD_SCREEN)} /> */}
    </div>
  );
};

export default ControlPanel;
