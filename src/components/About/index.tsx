import React, { useRef } from "react";
import "./About.css";
import { AboutMe, TechIcon } from "../../constants";
// import RangeSlider from "../../common/RangeSlider/RangeSlider";
// import { AboutMeIcon, Ellipse } from "../../assets/svg/svg";
import MyToolTip from "../../common/ToolTip";
import ScrollAnimation from "../../common/ScrollAnimation";
import { PageHeadings } from "../../common/GenericeFunction";
import HoverCards from "../../common/HoverCards";

const About: React.FunctionComponent = () => {
  // const [onHover, setOnHover] = useState(false);
  // const [animateRanges, setAnimateRanges] = useState(false);
  const rangeRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setAnimateRanges(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (rangeRef.current) {
  //     observer.observe(rangeRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="About" className="about-wrapper">
      <ScrollAnimation>
        <div className="about-section">
          <PageHeadings heading="About me" subHeading="Skills & Approach" />
          <div className="">
            <div className="about-info" ref={rangeRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[30px] md:mb-[50px]">
              {AboutMe.map((item, index) => (
                <HoverCards
                  key={index}
                  title={item.skill}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
              </div>

              {/* <div className="about-range-container">
                {TectRange.map((range, index) => (
                  <div key={index} className="range-container">
                    <RangeSlider
                      title={range.title}
                      min={0}
                      max={100}
                      value={animateRanges ? range.range : 0}
                      step={1}
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="about-tech">
            <div className="about-tech-title text-[#2d2e32] dark:text-white border-r-[2px] border-r-rgba(45, 46, 50, 0.5) dark:border-r-white">Tech Stack</div>
            <div className="tech-icon-container">
              {TechIcon.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="tech-icon-child"
                >
                  <img
                    className="tech-icon-child-icon"
                    id={item.title}
                    key={index}
                    src={item.logo}
                    data-tooltip-id={item.title}
                    data-tooltip-content={item.title}
                    alt="icon"
                  />
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
