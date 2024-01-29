import React from 'react'
import './Footer.css'
import { FaceBook, GitHub, Instagram, Linkedin } from '../../assets/svg/svg'
import { scrollToSection } from '../../commonFunction'

const Footer = () => {
    return (
        <section id='footer' className='footer-main'>
            <div className='footer-wrapper'>
                <div>
                    <div className="header-title-container">
                        <div className="header-logo" style={{ color: 'white' }}>Ps</div>
                        <div className="header-logo-title" style={{ color: 'white' }}>Prateek Singh</div>
                    </div>
                </div>
                <div className='footer-about-section'>
                    <div onClick={() => scrollToSection('Home', -110)}>Home</div>
                    <div onClick={() => scrollToSection('About')}>About</div>
                    <div onClick={() => scrollToSection('Work')}>Experience</div>
                    <div onClick={() => scrollToSection('Resume', -130)}>Resume</div>
                    <div onClick={() => scrollToSection('Blogs', 0)}>Blogs</div>
                    <div onClick={() => scrollToSection('Contact')}>Contact</div>
                </div>
                <div className='footer-social'>
                    <a href='https://www.facebook.com/profile.php?id=100002690421229' target='_blank'>
                        <FaceBook />
                    </a>
                    <a href='https://www.instagram.com/prateek_singh_11' target='_blank'>
                        <Instagram />
                    </a>
                    <a href='https://www.linkedin.com/in/prateek-singh-36b38a186' target='_blank'>
                        <Linkedin />
                    </a>
                    <a href='https://github.com/Prateek-Singh1' target='_blank'>
                        <GitHub />
                    </a>
                </div>
                <div className='footer-reserved'>© 2024 <span>Prateek</span> All Rights Reserved , Inc.</div>
            </div>
        </section>
    )
}

export default Footer