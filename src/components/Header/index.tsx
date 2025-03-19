import React, { useState, useEffect } from "react";
import "./Header.css";
import { scrollToSection } from "../../commonFunction";
import { DownloadIcon, MenuCloseIcon } from "../../assets/svg/svg";
import Button from "../../common/Button";
import resume from '../../assets/docs/Prateek Kumar Singh.pdf'

interface HeaderProps {
  activeSection: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ activeSection }) => {
  const [selectedButton, setSelectedButton] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("disable-background-scroll");
      return () => {
        document.body.classList.remove("disable-background-scroll");
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (activeSection) {
      setSelectedButton(activeSection);
    }
  }, [activeSection]);

  const handleButtonClick = (buttonName: string, offSet: number) => {
    setSelectedButton(buttonName);
    scrollToSection(buttonName, offSet);
    setIsMenuOpen(false);
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    const downloadUrl = resume;
    window.open(downloadUrl, '_blank');
};

  const desktopHeader = () => {
    return (
      <header className="header-wrapper">
        <div
          className={`header-container ${
            innerWidth >= 768 ? "bigger-header" : "smaller-header"
          }`}
        >
          <div
            className={`header-btn flex md:hidden header-btn-mobile ${
              innerWidth < 768 && "header-btn-selected"
            } ${selectedButton === "Home" ? "header-btn-selected" : ""}`}
            onClick={() => {
              if (innerWidth < 768) {
                handleOpenMenu();
              } else {
                handleButtonClick("Home", -140);
              }
            }}
          >
            {innerWidth >= 768 ? "Home" : "Menu"}
          </div>
          <div className="header-option-section">
            <div
              className="logo-head"
              onClick={() => handleButtonClick("Home", -140)}
            >
              <div className="header-title-container">
                <div className="header-logo">P</div><b className="text-[18px] font-[600] hidden lg:block">Singh</b>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div
                className={`header-btn ${
                  selectedButton === "Home" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("Home", -100)}
              >
                Home
              </div>
              <div
                className={`header-btn ${
                  selectedButton === "About" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("About", 0)}
              >
                About
              </div>
              <div
                className={`header-btn ${
                  selectedButton === "Work" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("Work", 0)}
              >
                Experience
              </div>
              <div
                className={`header-resume header-btn ${
                  selectedButton === "Resume" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("Resume", -110)}
              >
                Resume
              </div>
              <div
                className={`header-btn ${
                  selectedButton === "Blogs" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("Blogs", 0)}
              >
                Blogs
              </div>
              <div
                className={`header-btn ${
                  selectedButton === "Contact" ? "header-btn-selected" : ""
                }`}
                onClick={() => handleButtonClick("Contact", -90)}
              >
                Contact
              </div>
            </div>
            <div className="w-fit">
              <Button color="" onClick={handleDownload} text="Download CV" btnType='round' svg={true} icon={<DownloadIcon/>}/>
            </div>
            <div
              className={`mobile-header-wrapper-start ${
                isMenuOpen ? "open-mobile-menu" : "close-mobile-menu"
              }`}
            >
              {MobileHeader()}
            </div>
          </div>
        </div>
      </header>
    );
  };

  const MobileHeader = () => {
    return (
      <div className={`mobile-header-wrapper`}>
        <div className="menuCloseIcon">
          <div className="" onClick={() => handleButtonClick("Home", -110)}>
            <div className="header-title-container">
              <div className="header-logo" style={{ color: "white" }}>
                Ps
              </div>
            </div>
          </div>
          <p onClick={handleOpenMenu}>
            <MenuCloseIcon />
          </p>
        </div>
        <div onClick={() => handleButtonClick("Home", -110)}>Home</div>
        <div onClick={() => handleButtonClick("About", 0)}>About</div>
        <div onClick={() => handleButtonClick("Work", 0)}>Experience</div>
        <div onClick={() => handleButtonClick("Resume", -110)}>Resume</div>
        <div onClick={() => handleButtonClick("Blogs", 0)}>Blogs</div>
        <div onClick={() => handleButtonClick("Contact", 0)}>Contacts</div>
      </div>
    );
  };

  return <>{desktopHeader()}</>;
};

export default Header;
