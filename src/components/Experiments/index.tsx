import React from "react";
import ScrollAnimation from "../../common/ScrollAnimation";
import { PageHeadings } from "../../common/GenericeFunction";
import Cards from "../../common/Card";

export const getProduct = [
  {
    title: "Infinite Scrolling",
    description:
      "Infinite scrolling is a web design pattern where new content loads dynamically as the user scrolls down, creating a seemingly endless experience without page breaks or navigation buttons.",
    path: "infinite-scrolling",
    image: "https://res.cloudinary.com/dpyrylw7s/image/upload/v1743263097/gif/infinite-scrolling.gif"
  },
  {
    title: "Debouncing",
    description:
      "Debouncing is a technique used to ensure that a function is not called too frequently.",
    path: "debouncing",
    image: "https://res.cloudinary.com/dpyrylw7s/image/upload/v1743262863/gif/debouncing.gif"
  },
  {
    title: "More to Come",
    description:
      "Stay tuned for more exciting features and components coming soon!",
    path: "coming-soon",
  },
];

const Experiments: React.FC = () => {
  const handleCardClick = (path: string) => {
    window.open(`components/${path}`, "_blank");
  };

  return (
    <>
      <section
        id="Experiments"
        className="h-full flex flex-col gap-[60px] justify-center px-[25px] py-[50px] md:py-[100px] md:px-[25px]"
      >
        <ScrollAnimation>
          <div className="w-full flex items-center justify-center flex-col gap-[50px] md:gap-[70px]">
            <PageHeadings
              heading="Experiments"
              subHeading="Components"
            />
            <div className="flex w-full max-w-[1100px] md:grid gap-[20px] sm:gap-4 md:gap-[25px] md:grid-cols-3 grid-cols-2 overflow-x-scroll overflow-y-hidden md:overflow-auto">
              {getProduct.map((item, index) => (
                <div key={index} className="h-auto object-fit md:w-full w-[250px]">
                  {item.path !== "coming-soon" ? (
                    <Cards
                      image={item.image}
                      btnText="Explore"
                      title={item.title}
                      description={item.description}
                      onClick={() => handleCardClick(item.path)}
                    />
                  ) : (
                    <SkeletonLoader />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export const SkeletonLoader = () => {
  return (
    <div className="relative w-[inherit] h-full border-gray-200 rounded-lg border-1 dark:border-[#383737] group">
      <div className="w-full h-full shadow-lg rounded-lg overflow-hidden animate-pulse">
        {/* Skeleton Square */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Text Overlay */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600 mb-2">
              More to Come
            </h2>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] w-[70%] m-auto rounded transition-all absolute bottom-[-1px] left-0"></div>
    </div>
  );
};

export default Experiments;
