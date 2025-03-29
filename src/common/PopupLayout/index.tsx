import React, { useEffect, useRef } from "react";
import "./PopupLayout.css";
import { CloseIcon } from "../../assets/svg/svg";
import { useOutsideClick } from "../../commonFunction";

interface PopupLayoutProps {
  children: React.ReactElement;
  onClose: () => void;
}

const PopupLayout: React.FunctionComponent<PopupLayoutProps> = ({
  children,
  onClose,
}) => {
  const popupLayoutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.classList.add("disable-background-scroll");
    return () => {
      document.body.classList.remove("disable-background-scroll");
    };
  }, []);

  useOutsideClick(popupLayoutRef, () => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <section id="popup-layout" className="popup-layout-wrapper">
      <div className="popup-layout-container">
        <div className="popup-layout-body bg-white dark:bg-[#181818] dark:border-[#383737]" ref={popupLayoutRef}>
          <div className="popup-layout-close" onClick={onClose}>
            <CloseIcon />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PopupLayout;
