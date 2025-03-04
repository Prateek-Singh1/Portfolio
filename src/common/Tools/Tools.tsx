import React, { useState, useRef } from "react";
import "./Style.css";
import { DarkMode, LightMode, SettingIcon } from "../../assets/svg/svg";
import ColorPicker from "../ColorPicker";
import { useOutsideClick } from "../../commonFunction";

const Tools: React.FC = () => {
  const [showTools, setShowTools] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(true);
  const toolsRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("dark");
  };
  
  useOutsideClick(toolsRef, () => {
    if (showTools) {
      setShowTools(false);
    }
  });
  return (
    <>
      <section id="tools-wrapper" className="tools-wrapper" ref={toolsRef}>
        <p onClick={() => setShowTools(!showTools)}>
          <SettingIcon />
        </p>

        {/* Color Picker (Moves Up) */}
        <div className={`color-tool ${showTools ? "move-up" : ""}`}>
          <ColorPicker />
        </div>

        {/* Dark-Light Mode Toggle (Moves Left) */}
        <div
          className={`dark-light-tool ${showTools ? "move-left" : ""}`}
          onClick={toggleDarkMode}
        >
          {!isLightMode ? <LightMode /> : <DarkMode />}
        </div>
      </section>
    </>
  );
};

export default Tools;
