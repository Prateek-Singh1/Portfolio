import React from "react";
import "./Button.css";
import { Loader, RightTiltedArrow } from "../../assets/svg/svg";

interface ButtonProps {
  size?: string;
  text?: string;
  onClick?: () => void;
  loader?: boolean;
  color?: string;
  btnType?: string;
  style?: React.CSSProperties;
  svg?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  size = "medium",
  text = "Button",
  loader = false,
  onClick,
  color = "orange",
  style,
  svg = false,
  btnType,
  icon,
}) => {
  const btnSize = `btn-${size}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`btn gap-[10px] btn-${color} ${btnSize} ${
        btnType === "round" ? "rounded-3xl" : "rounded-[8px]"
      }`}
      onClick={handleClick}
      style={style}
    >
      {loader ? <Loader size={size} /> : text}

      {svg &&
        (icon ? icon : <RightTiltedArrow className="btnSvg" color="white" />)}
    </button>
  );
};

export default Button;
