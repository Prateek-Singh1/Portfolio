import React from 'react';
import './Footer.css';
import { GitHub, Linkedin } from '../../assets/svg/svg';
import { scrollToSection } from '../../commonFunction';

interface FooterLinkProps {
    section: string;
    offset?: number;
    children: React.ReactNode;
}

const FooterLink: React.FunctionComponent<FooterLinkProps> = ({ section, offset = 0, children }) => (
    <div onClick={() => scrollToSection(section, offset)}>{children}</div>
);

interface ExternalLinkProps {
    href: string;
    children: React.ReactNode;
}

const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({ href, children }) => (
    <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
);

const Footer: React.FunctionComponent = () => {
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
                    <FooterLink section='Home' offset={-110}>Home</FooterLink>
                    <FooterLink section='About'>About</FooterLink>
                    <FooterLink section='Work'>Experience</FooterLink>
                    <FooterLink section='Resume' offset={-130}>Resume</FooterLink>
                    <FooterLink section='Blogs' offset={0}>Blogs</FooterLink>
                    <FooterLink section='Contact'>Contact</FooterLink>
                </div>
                <div className='footer-social'>
                    <ExternalLink href='https://www.linkedin.com/in/prateek-singh-36b38a186'>
                        <Linkedin />
                    </ExternalLink>
                    <ExternalLink href='https://github.com/Prateek-Singh1'>
                        <GitHub />
                    </ExternalLink>
                </div>
                <div className='footer-reserved'>© {new Date().getFullYear()} <span>Prateek</span> All Rights Reserved, Inc.</div>
            </div>
        </section>
    );
}

export default Footer;
