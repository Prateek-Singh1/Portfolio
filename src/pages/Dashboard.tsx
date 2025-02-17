import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import Header from "../components/Header";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Resume from "../components/Resume";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../common/LoadingScreen";

const Dashboard: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string>("");

  const sections = {
    Home: useRef<HTMLDivElement>(null),
    About: useRef<HTMLDivElement>(null),
    Work: useRef<HTMLDivElement>(null),
    Resume: useRef<HTMLDivElement>(null),
    Blogs: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    document.body.classList.add("disable-background-scroll");
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove("disable-background-scroll");
    }
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveComponent(
            visibleSection.target.getAttribute("data-section") || ""
          );
        }
      },
      { threshold: 0.5 }
    );

    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => {
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      });
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="home-header">
        <Header activeSection={activeComponent} />
      </div>
      <div ref={sections.Home} data-section="Home" className="home-main-screen">
        <Home />
      </div>
      <div ref={sections.About} data-section="About">
        <About />
      </div>
      <div ref={sections.Work} data-section="Work">
        <WorkExperience />
      </div>
      <div ref={sections.Resume} data-section="Resume">
        <Resume />
      </div>
      <div ref={sections.Blogs} data-section="Blogs">
        <Blogs />
      </div>
      <div ref={sections.Contact} data-section="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
