import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { TechIcon, TectRange } from "../../constants";
import RangeSlider from "../../common/RangeSlider/RangeSlider";
import { AboutMeIcon, Ellipse } from "../../assets/svg/svg";
import MyToolTip from "../../common/ToolTip";
import ScrollAnimation from "../../common/ScrollAnimation";
import { PageHeadings } from "../../common/GenericeFunction";

const About: React.FunctionComponent = () => {
    const [onHover, setOnHover] = useState(false);
    const [animateRanges, setAnimateRanges] = useState(false);
    const rangeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateRanges(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (rangeRef.current) {
            observer.observe(rangeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="About" className="about-wrapper">
            <ScrollAnimation>
                <div className="about-section">
                    <PageHeadings heading="About me" subHeading="My Skills & Approach" />
                    <div className="hire-me-container">
                        <div
                            className="hire-me-image-container"
                            onMouseEnter={() => setOnHover(true)}
                            onMouseLeave={() => setOnHover(false)}
                        >
                            <div className="hire-me-picture">
                                <AboutMeIcon />
                                <div className={`hire-me-ellipse ${onHover ? "onhover-show" : "onHover-hide"}`}>
                                    <Ellipse />
                                </div>
                            </div>
                        </div>
                        <div className="about-info" ref={rangeRef}>
                            <ul className="about-description">
                                <li><strong>Responsive & User-Centric Design:</strong> Ensures visually appealing websites across all devices.</li>
                                <li><strong>Clean, Efficient, and Maintainable Code:</strong> Writes maintainable, scalable code for polished results.</li>
                                <li><strong>Strong Problem-Solving & Debugging Skills:</strong> Swift issue resolution for smooth project development.</li>
                                <li><strong>Collaborative & Communicative Team Player:</strong> Collaborative and communicative within cross-functional teams.</li>
                                <li><strong>Continuous Learner & Technology Enthusiast:</strong> Quick adoption of new technologies for innovative projects.</li>
                            </ul>
                            <div className="about-range-container">
                                {TectRange.map((range, index) => (
                                    <div key={index} className="range-container">
                                        <RangeSlider title={range.title} min={0} max={100} value={animateRanges ? range.range : 0} step={1} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="about-tech">
                        <div className="about-tech-title">Tech Stack</div>
                        <div className="tech-icon-container">
                            {TechIcon.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" className="tech-icon-child">
                                    <img id={item.title} key={index} src={item.logo} data-tooltip-id={item.title} data-tooltip-content={item.title} />
                                    <MyToolTip id={item.title} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default About;