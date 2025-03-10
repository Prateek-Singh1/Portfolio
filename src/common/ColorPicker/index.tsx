import React, { useState, useEffect } from "react";
import "./Style.css";
import { ColorIcon } from "../../assets/svg/svg";

const ColorPicker: React.FC = () => {
  const savedColor = localStorage.getItem("primaryColor") || "#FD853A";
  const [color, setColor] = useState(savedColor);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    document.documentElement.style.setProperty(
      "--primary-color",
      selectedColor
    );
    localStorage.setItem("primaryColor", selectedColor);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", color);
  }, [color]);

  return (
    <section className="color-picker-wrapper">
      <div className="color-picker-icon" style={{ position: "absolute" }}>
        <ColorIcon />
      </div>
        <input
          aria-label="Color Picker"
          className="color-picker-container"
          style={{ opacity: 0 }}
          type="color"
          id="colorPicker"
          value={color}
          onChange={handleColorChange}
        />
    </section>
  );
};

export default ColorPicker;
