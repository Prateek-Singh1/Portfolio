import React, { useState, useEffect, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../common/LoadingScreen";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("../components/About"));
const WorkExperience = lazy(() => import("../components/WorkExperience"));
// const Resume = lazy(() => import("../components/Resume"));
const Blogs = lazy(() => import("../components/Blogs"));
const Contact = lazy(() => import("../components/Contact"));
const Tools = lazy(() => import("../common/Tools/Tools"));
const Experiments = lazy(() => import("../components/Experiments"));

const Dashboard: React.FunctionComponent = () => {
  const [activeComponent, setActiveComponent] = useState<string>("");

  const sections = {
    Home: useInView({ threshold: 0.5 }),
    About: useInView({ threshold: 0.5 }),
    Work: useInView({ threshold: 0.5 }),
    Experiments: useInView({ threshold: 0.5 }),
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
        <div className="home-header bg-transparent">
          <Header activeSection={activeComponent} />
        </div>
        <div ref={sections.Home.ref} className="home-main-screen dark:bg-black">
          <Home />
        </div>
        <div ref={sections.About.ref} className="bg-gray-200/30 dark:bg-black">
          <About />
        </div>
        <div ref={sections.Work.ref} className="bg-white dark:bg-black">
          <WorkExperience />
        </div>
        {/* <div ref={sections.Resume.ref} className="white dark:bg-black">
          <Resume />
        </div> */}
        <div
          ref={sections.Experiments.ref}
          className="bg-gray-200/30 dark:bg-black"
        >
          <Experiments />
        </div>
        <div ref={sections.Blogs.ref} className="bg-white dark:bg-black">
          <Blogs />
        </div>
        <div ref={sections.Contact.ref} className="bg-white dark:bg-black">
          <Contact />
        </div>
        <Footer />
        <Tools />
      </Suspense>
    </>
  );
};

export default Dashboard;
