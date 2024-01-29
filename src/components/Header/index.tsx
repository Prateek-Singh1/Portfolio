import React, { useState, useEffect } from 'react';
import './Header.css';
import { scrollToSection } from '../../commonFunction';
import { MenuCloseIcon } from '../../assets/svg/svg';

interface HeaderProps { }

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [selectedButton, setSelectedButton] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = (buttonName: string, offSet: number) => {
    setSelectedButton(buttonName);
    scrollToSection(buttonName, offSet)
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const desktopHeader = () => {
    return (
      <header className='header-wrapper'>
        <div className={`header-container ${innerWidth > 768 ? 'bigger-header' : 'smaller-header'}`}>
          <div
            className={`header-btn ${innerWidth < 768 && 'header-btn-selected'} ${selectedButton === 'Home' ? 'header-btn-selected' : ''}`}
            onClick={() => {
              if (innerWidth <= 768) {
                handleOpenMenu();
              } else {
                handleButtonClick('Home', -110);
              }
            }}
          >
            {innerWidth > 768 ? 'Home' : 'Menu'}
          </div>
          <div className='header-option-section'>
            <div
              className={`header-btn ${selectedButton === 'About' ? 'header-btn-selected' : ''}`}
              onClick={() => handleButtonClick('About')}
            >
              About
            </div>
            <div
              className={`header-btn ${selectedButton === 'Work' ? 'header-btn-selected' : ''}`}
              onClick={() => handleButtonClick('Work')}
            >
              Experience
            </div>
            <div className='logo-head' onClick={() => handleButtonClick('Home', -110)}>
              <div className='header-title-container'>
                <div className='header-logo'>Ps</div>
                {/* <div className='header-logo-title'>Prateek</div> */}
              </div>
            </div>
            <div
              className={`header-resume header-btn ${selectedButton === 'Resume' ? 'header-btn-selected' : ''}`}
              onClick={() => handleButtonClick('Resume', -110)}
            >
              Resume
            </div>
            <div
              className={`header-btn ${selectedButton === 'Blogs' ? 'header-btn-selected' : ''}`}
              onClick={() => handleButtonClick('Blogs', 0)}
            >
              Blogs
            </div>
            <div
              className={`header-btn ${selectedButton === 'Contact' ? 'header-btn-selected' : ''}`}
              onClick={() => handleButtonClick('Contact')}
            >
              Contact
            </div>
          </div>
          <div className={`mobile-header-wrapper-start ${isMenuOpen ? 'open-mobile-menu' : 'close-mobile-menu'}`} >
            <div className={`mobile-header-wrapper`}>
              <div className='menuCloseIcon'>
                <div className='' onClick={() => handleButtonClick('Home', -110)}>
                  <div className='header-title-container'>
                    <div className='header-logo' style={{ color: 'white' }}>Ps</div>
                  </div>
                </div>
                <p onClick={handleOpenMenu}><MenuCloseIcon /></p>
              </div>
              <div>Home</div>
              <div>About</div>
              <div>Experience</div>
              <div>Resume</div>
              <div>Blogs</div>
              <div>Contacts</div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      {desktopHeader()}
    </>
  );
};

export default Header;
