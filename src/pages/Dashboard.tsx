import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("../components/About"));
const WorkExperience = lazy(() => import("../components/WorkExperience"));
const Resume = lazy(() => import("../components/Resume"));
const Blogs = lazy(() => import("../components/Blogs"));
const Contact = lazy(() => import("../components/Contact"));
const Tools = lazy(() => import("../common/Tools/Tools"));
import LoadingScreen from "../common/LoadingScreen";

const Dashboard: React.FunctionComponent = () => {
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
      <Suspense fallback={<LoadingScreen />}>
        <div className="home-header">
          <Header activeSection={activeComponent} />
        </div>
        <div
          ref={sections.Home}
          data-section="Home"
          className="home-main-screen"
        >
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
        <Tools />
      </Suspense>
    </>
  );
};

export default Dashboard;
