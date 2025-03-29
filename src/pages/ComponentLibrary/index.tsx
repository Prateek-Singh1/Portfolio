import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import Tools from "../../common/Tools/Tools";
import Navbar from "./components/Navbar";
import "./index.css";

const ComponentLibrary: React.FC = () => {
  const [showSidebar, setShowSidrbar] = useState(false);

  const handleSidebar = () => {
    setShowSidrbar(!showSidebar);
  };

  return (
    <>
      <section id="component library">
        <div className="bg-white dark:bg-[#000]">
          <Navbar showSideBar={handleSidebar} />
          <Sidebar show={showSidebar} />
          <MainContainer />
        </div>
        <Tools />
      </section>
    </>
  );
};

export default ComponentLibrary;
