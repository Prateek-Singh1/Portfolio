import React from 'react'
import './Footer.css'
import { FaceBook, Instagram, Linkedin } from '../../assets/svg/svg'
import { scrollToSection } from '../../commonFunction'

const Footer = () => {
    return (
        <section id='footer' className='footer-main'>
            <div className='footer-wrapper'>
                <div>
                    <div className="header-title-container">
                        <div className="header-logo" style={{ color: 'white' }}>Ps</div>
                        <div className="header-logo-title" style={{ color: 'white' }}>Prateek</div>
                    </div>
                </div>
                <div className='footer-about-section'>
                    <div onClick={() => scrollToSection('Home')}>Home</div>
                    <div onClick={() => scrollToSection('About')}>About</div>
                    <div onClick={() => scrollToSection('Work')}>Experience</div>
                    <div onClick={() => scrollToSection('Resume')}>Resume</div>
                    <div onClick={() => scrollToSection('Projects')}>Projects</div>
                    <div onClick={() => scrollToSection('Contact')}>Contact</div>
                </div>
                <div className='footer-social'>
                    <FaceBook />
                    <Instagram />
                    <Linkedin />
                </div>
                <div className='footer-reserved'>© 2024 <span>Prateek</span> All Rights Reserved , Inc.</div>
            </div>
        </section>
    )
}

export default Footer