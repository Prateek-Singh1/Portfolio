import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ComponentsIcon,
} from "../assets/svg";

export const components = ["Infinite Scrolling", "Debouncing", "OTP Verification"];

interface SidebarProps {
  show: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ show = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <section id="sidebar">
        <aside
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform  bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
            show ? "" : "-translate-x-full"
          }`}
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-[#000]">
            <form action="#" method="GET" className="md:hidden mb-2">
              <label htmlFor="sidebar-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="sidebar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
            <ul className="pt-5 space-y-2">
              <li>
                <div className="flex items-center mb-4 p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 dark:text-white group">
                  <ComponentsIcon />
                  <span className="ml-3">Web Performance</span>
                </div>
                <ul className="flex flex-col">
                  {components.map((item) => {
                    const slug = item.toLowerCase().replace(/\s+/g, "-");
                    const isActive = location.pathname.includes(slug);

                    return (
                      <li
                        key={item}
                        className={`cursor-pointer flex items-center p-2 text-base font-medium transition duration-75 dark:text-white group
                ${
                  isActive
                    ? "border-l-2 border-[var(--primary-color)]"
                    : "border-l-2 dark:border-black border-white"
                }`}
                        onClick={() => navigate(`/components/${slug}`)}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Sidebar;
