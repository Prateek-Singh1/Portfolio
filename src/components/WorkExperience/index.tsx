import React, { useState } from "react";
import "./WorkExperience.css";
import { Experience } from "../../constants";
import { PageHeadings } from "../../common/GenericeFunction";
import Button from "../../common/Button";
import ScrollAnimation from "../../common/ScrollAnimation";
import HtmlReactParser from "html-react-parser";

const WorkExperience: React.FunctionComponent = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <section id="Work" className="experience-wrapper">
        <ScrollAnimation>
          <div className="experience-section">
            <PageHeadings
              heading={"Experience"}
              subHeading={"Work Experience"}
            />
            <div
              className={`experience-main-container ${
                showExperience ? "show-experience" : "hide-experience"
              }`}
            >
              {Experience.map((work, index) => {
                return (
                  <div key={index} className="experience-container">
                    <div
                      className={`experience-info-left  ${
                        index === 0
                          ? "bg-[var(--primary-color)] shadow-[rgba(255, 112, 36, 0.09) 0px 3px 12px] text-white"
                          : "text-[#321A50] dark:text-[#808080] border border-gray-200 shadow-md dark:bg-[#181818] dark:border-[#383737] dark:border-x dark:border-b "
                      }`}
                    >
                      <div className="experience-info-container experience-mobile">
                        <p className="experience-info-title">
                          {work.designation}
                        </p>
                        <p
                          className="experience-designation"
                          style={index === 0 ? { color: "white" } : {}}
                        >
                          {work.company}
                        </p>
                        <p className="experience-date">{work.date}</p>
                      </div>
                      <p>{HtmlReactParser(work.description)}</p>
                    </div>
                    <div className="experience-info-right">
                      <div className="experience-info-container">
                        <p className="experience-info-title text-[#344054] dark:text-white">
                          {work.designation}
                        </p>
                        <p className="experience-designation">{work.company}</p>
                        <p className="experience-date text-[#344054] dark:text-white">
                          {work.date}
                        </p>
                      </div>
                    </div>
                    <div className="experience-info-seperator">
                      <a
                        href={work.link}
                        target="_blank"
                        className="experience-info-dot"
                      >
                        <img loading="lazy" width="35" height="20" src={work.icon} alt="work-icon" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            {!showExperience ? (
              <div className="experience-show-more">
                <Button
                  text="SHOW MORE"
                  size="medium"
                  color="gray"
                  onClick={() => setShowExperience(!showExperience)}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default WorkExperience;
