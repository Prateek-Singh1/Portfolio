import React, { useState } from "react";
import "./WorkExperience.css";
import { Experience } from "../../constants";
import { PageHeadings } from "../../common/GenericeFunction";
import Button from "../../common/Button";
import ScrollAnimation from "../../common/ScrollAnimation";

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
                      className="experience-info-left"
                      style={
                        index === 0
                          ? {
                              background: "var(--primary-color)",
                              boxShadow:
                                "rgba(255, 112, 36, 0.09) 0px 3px 12px",
                            }
                          : { color: "#321A50" }
                      }
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
                      <p
                        dangerouslySetInnerHTML={{ __html: work.description }}
                      />
                    </div>
                    <div className="experience-info-right">
                      <div className="experience-info-container">
                        <p className="experience-info-title">
                          {work.designation}
                        </p>
                        <p className="experience-designation">{work.company}</p>
                        <p className="experience-date">{work.date}</p>
                      </div>
                    </div>
                    <div className="experience-info-seperator">
                      <a href={work.link} target="_blank" className="experience-info-dot">
                        <img src={work.icon} />
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
