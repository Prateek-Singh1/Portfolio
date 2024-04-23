import React, { useState } from 'react'
import './Home.css'
import { CoatsSvg, EllipseStyle, HelloSvg, HeroBannerStyle, Star } from '../../assets/svg/svg'
import heroImage from '../../assets/images/hero-image.png'
import Typewriter from 'typewriter-effect';
import Button from '../../common/Button';
import { scrollToSection } from '../../commonFunction';

const Home: React.FunctionComponent = () => {

    const [showImageBackDrop, setShowImageBackDrop] = useState(false);

    const onMouseEnterImage = () => {
        if (innerWidth >= 850) {
            setShowImageBackDrop(true);
        }
    }
    const onMouseLeaveImage = () => {
        if (innerWidth >= 850) {
            setShowImageBackDrop(false);
        }
    }

    return (
        <section className='home-wrapper' id='Home'>
            <div className='home-hero-wrapper'>
                <div className={`home-title-wrapper ${showImageBackDrop ? 'home-title-wrapper-hide' : 'home-title-wrapper-show'}`}>
                    <div className='home-hello-title'>
                        <p>Hello!</p>
                        <div>
                            <HelloSvg />
                        </div>
                    </div>
                    <div className='home-title'>I’m <span>Prateek</span>,</div>
                    <div className='home-title'>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'UI Developer', 'Responsive Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div
                    className='home-hero-container'
                    onMouseEnter={onMouseEnterImage}
                    onMouseLeave={onMouseLeaveImage}
                >
                    <div>
                        <EllipseStyle />
                    </div>
                    <div className='home-hero-image'>
                        <div className='home-hero-button'>
                            <Button text='Contact' color='orange' size='large' style={{ borderRadius: '50px' }} svg={true} onClick={() => scrollToSection('Contact')} />
                        </div>
                        <img
                            src={heroImage}
                            loading="lazy"
                        />
                        <div className={`${showImageBackDrop ? 'home-hero-backdrop-style-show' : 'home-hero-backdrop-style-hide'}`}>
                            <HeroBannerStyle />
                        </div>
                    </div>
                </div>
                <div className={`home-info ${showImageBackDrop ? 'home-info-final' : 'home-info-initial'}`}>
                    <div className='home-about'>
                        <div>
                            <CoatsSvg />
                        </div>
                        <p>Passionate front-end developer creating responsive, eye-catching websites for a seamless user experience.</p>
                    </div>
                    <div className='home-experience'>
                        <div>
                            {[1, 2, 3, 4, 5].map((index) => {
                                return (
                                    <Star key={index} />
                                )
                            })}
                        </div>
                        <div className='home-experience-title'>
                            <p>2 Years</p>
                            <span>Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home