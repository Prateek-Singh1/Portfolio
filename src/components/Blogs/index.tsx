import React, { useState } from "react";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import { GetBlogs } from "../../constants";
import { PageHeadings } from "../../common/GenericeFunction";
import ScrollAnimation from "../../common/ScrollAnimation";
import AnimatedCard from "../../common/AnimatedCards";

const Blogs: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");

  const onClickHandler = (link: string, type: string) => {
    if (type === "Blog") {
      navigate(link);
    } else {
      window.open(link, "_blank");
    }
  };

  const filteredBlogs = GetBlogs.filter((blog) => {
    if (selectedTab === "all") return true;
    return blog.type.toLowerCase() === selectedTab;
  });

  return (
    <section id="Blogs" className="blog-wrapper">
      <ScrollAnimation>
        <div className="blog-container">
          <PageHeadings
            heading="Blog and Rewards"
            subHeading="Learn and grow"
          />
          <div className="blog-list-toggle-container">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap -mb-px text-sm font-medium text-center gap-[20px]">
                {["all", "reward", "blog"].map((tab) => (
                  <div key={tab} className="" role="presentation">
                    <button
                      className={`zm:text-[15px] md:text-[20px] font-medium cursor-pointer inline-block p-4 rounded-t-lg ${
                        selectedTab === tab
                          ? "border-b-2 text-white"
                          : "hover:border-b-2 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
                      }`}
                      style={
                        selectedTab === tab
                          ? {
                              borderBottomColor: "var(--primary-color)",
                              color: "var(--primary-color)",
                            }
                          : {}
                      }
                      onClick={() => setSelectedTab(tab)}
                    >
                      {tab === "all"
                        ? "All"
                        : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog-list-container">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex-1 border border-solid border-slate-200 rounded-[12px] shadow-[0px_4px_14px_rgba(0,0,0,0.05)]"
                >
                  <AnimatedCard
                    title={blog.title}
                    description={blog.description}
                    image={blog.img}
                    btnText={blog.type === "Blog" ? "Learn more" : "View"}
                    onClick={() => onClickHandler(blog.link, blog.type)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Blogs;
