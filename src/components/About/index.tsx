import React, { useState } from 'react'
import './About.css'
import { TechIcon, TectRange } from '../../constants'
import RangeSlider from '../common/RangeSlider/RangeSlider'
import { AboutMeIcon, Ellipse } from '../../assets/svg/svg'


const About = () => {
    const [onHover, setOnHover] = useState(false);
    return (
        <section id='About' className='about-wrapper'>
            <div className='about-section'>
                <p className='home-sub-title'>About me</p>
                <div className='hire-me-container'>
                    <div className='hire-me-image-container'>
                        <div className='hire-me-picture'
                            onMouseEnter={() => setOnHover(true)}
                            onMouseLeave={() => setOnHover(false)}
                        >
                            <AboutMeIcon />
                            <div className={`hire-me-ellipse ${onHover ? 'onhover-show' : 'onHover-hide'}`}>
                                <Ellipse />
                            </div>
                        </div>
                    </div>
                    <div className='about-info'>

                        <div className='about-title'>Why <span>Hire me?</span></div>
                        <ul className='about-description'>
                            <li><strong>Responsive Design:</strong> Ensures visually appealing websites across all devices.</li>
                            <li><strong>Clean Code Advocate:</strong> Writes maintainable, scalable code for polished results.</li>
                            <li><strong>Problem Solving Skills:</strong> Swift issue resolution for smooth project development.</li>
                            <li><strong>Team Player:</strong> Collaborative and communicative within cross-functional teams.</li>
                            <li><strong>Adaptable Learner:</strong> Quick adoption of new technologies for innovative projects.</li>
                        </ul>
                        <div className='about-range-container'>
                            {TectRange.map((range, index) => {
                                return (
                                    <div key={index} className='range-container'>
                                        <div className='range-title'>
                                            <div>{range.title}</div>
                                            <div>{range.range}%</div>
                                        </div>
                                        <RangeSlider min={0} max={10} value={range.range} step={1} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='about-tech'>
                    <div className='about-tech-title'>
                        Tech Stack
                    </div>
                    <div className='tech-icon-container'>
                        {TechIcon.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img key={index} src={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;