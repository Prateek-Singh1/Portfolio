import React, { useState, useEffect, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
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
    Home: useInView({ threshold: 0.5 }),
    About: useInView({ threshold: 0.5 }),
    Work: useInView({ threshold: 0.5 }),
    Resume: useInView({ threshold: 0.5 }),
    Blogs: useInView({ threshold: 0.5 }),
    Contact: useInView({ threshold: 0.5 }),
  };

  useEffect(() => {
    for (const [key, { inView }] of Object.entries(sections)) {
      if (inView) {
        setActiveComponent(key);
        break;
      }
    }
  }, [sections]);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <div className="home-header">
          <Header activeSection={activeComponent} />
        </div>
        <div ref={sections.Home.ref} className="home-main-screen">
          <Home />
        </div>
        <div ref={sections.About.ref} >
          <About />
        </div>
        <div ref={sections.Work.ref}>
          <WorkExperience />
        </div>
        <div ref={sections.Resume.ref}>
          <Resume />
        </div>
        <div ref={sections.Blogs.ref}>
          <Blogs />
        </div>
        <div ref={sections.Contact.ref}>
          <Contact />
        </div>
        <Footer />
        <Tools />
      </Suspense>
    </>
  );
};

export default Dashboard;
