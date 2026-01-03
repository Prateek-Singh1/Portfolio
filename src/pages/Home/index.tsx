import React, { useEffect, useState, lazy } from "react";
import "./Home.css";
import {
  CoatsSvg,
  EllipseStyle,
  HelloSvg,
  HeroBannerStyle,
  Star,
} from "../../assets/svg/svg";
import heroImage from "../../assets/images/hero-image.png";
import Button from "../../common/Button";
import { scrollToSection } from "../../commonFunction";
const Typewriter = lazy(() => import ("typewriter-effect"));

const Home: React.FunctionComponent = () => {
  const [showImageBackDrop, setShowImageBackDrop] = useState(false);
  const [timeSpent, setTimeSpent] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    calculateTimeSpent();
    const interval = setInterval(calculateTimeSpent, 86400000);
    return () => clearInterval(interval);
  }, []);

  const onMouseEnterImage = () => {
    if (innerWidth >= 850) {
      setShowImageBackDrop(true);
    }
  };
  const onMouseLeaveImage = () => {
    if (innerWidth >= 850) {
      setShowImageBackDrop(false);
    }
  };

  const calculateTimeSpent = () => {
    const joinDate = new Date(2022, 2, 1);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - joinDate.getFullYear();
    let months = currentDate.getMonth() - joinDate.getMonth();
    let days = currentDate.getDate() - joinDate.getDate();

    if (days < 0) {
      const prevMonthDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += prevMonthDays;
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    setTimeSpent({ years, months, days });
  };

  return (
    <section className="home-wrapper overflow-hidden" id="Home">
      <div className="home-hero-wrapper">
        <div
          className={`home-title-wrapper ${
            showImageBackDrop
              ? "home-title-wrapper-hide"
              : "home-title-wrapper-show"
          }`}
        >
          <div className="flex justify-center items-center flex-col home-text-bounce">
          <div className="home-hello-title w-fit">
            <p className="text-black dark:text-white">Hello!</p>
            <div>
              <HelloSvg />
            </div>
          </div>
            <div className="home-title text-black dark:text-white">
              I’m <span>Prateek</span>,
            </div>
            <div className="home-title text-black dark:text-white">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Engineer",
                    "UI Engineer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`home-info text-#344054 dark:text-white ${
            showImageBackDrop ? "home-info-final" : "home-info-initial"
          }`}
        >
          <div className="home-about">
            <div>
              <CoatsSvg />
            </div>
            <p>
              Passionate front-end developer creating responsive, eye-catching
              websites for a seamless user experience.
            </p>
          </div>
          <div className="home-experience">
            <div className="flex justify-end items-center">
              {[1, 2, 3].map((index) => {
                return <Star key={index} />;
              })}
            </div>
            <div className="home-experience-title mt-[10px] text-[#344054] dark:text-white">
              <p>
                <span style={{ color: "var(--primary-color)" }}>
                  {timeSpent.years}&nbsp;Years
                </span>
                {timeSpent.months > 0 && (
                  <span>&nbsp;{timeSpent.months}&nbsp;months</span>
                )}
              </p>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-hero-button"
        onMouseEnter={onMouseEnterImage}
        onMouseLeave={onMouseLeaveImage}
      >
        <Button
          text="Contact"
          color="orange"
          size="large"
          style={{ borderRadius: "50px" }}
          svg={true}
          onClick={() => scrollToSection("Contact")}
        />
      </div>
      <img
        loading="lazy"
        width="316"
        height="500"
        src={heroImage}
        className="home-hero-image"
        alt="Hero Image"
        onMouseEnter={onMouseEnterImage}
        onMouseLeave={onMouseLeaveImage}
      />
      <div
        className={`${
          showImageBackDrop
            ? "home-hero-backdrop-style-show"
            : "home-hero-backdrop-style-hide"
        }`}
      >
        <HeroBannerStyle />
      </div>
      <div className="home-hero-container w-full overflow-hidden absolute bottom-0 flex justify-center">
        <div>
          <EllipseStyle />
        </div>
      </div>
    </section>
  );
};

export default Home;
