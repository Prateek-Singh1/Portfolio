import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../../common/ScrollAnimation";
import { PageHeadings } from "../../common/GenericeFunction";
import Cards from "../../common/Card";
import CardSlider from "../../common/CardsCarousel";

export const getProduct = [
  {
    title: "Infinite Scrolling",
    description:
      "Infinite scrolling is a web design pattern where new content loads dynamically as the user scrolls down, creating a seemingly endless experience without page breaks or navigation buttons.",
    path: "infinite-scrolling",
    image:
      "https://res.cloudinary.com/dpyrylw7s/image/upload/v1743263097/gif/infinite-scrolling.gif",
  },
  {
    title: "Debouncing",
    description:
      "Debouncing is a technique used to ensure that a function is not called too frequently.",
    path: "debouncing",
    image:
      "https://res.cloudinary.com/dpyrylw7s/image/upload/v1743262863/gif/debouncing.gif",
  },
  {
    title: "OTP Verification",
    description:
      "OTP (One-Time Password) Verification is a security process where a temporary code is sent to the user's phone or email to verify their identity. In a React component, this typically involves handling user input, validating the code, and interacting with a backend API for confirmation.",
    path: "otp-verification",
    image:
      "https://res.cloudinary.com/dpyrylw7s/image/upload/v1746348046/gif/otp-verification.gif",
  },
];

const Experiments: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(`/components/${path}`);
  };

  return (
    <>
      <section
        id="Experiments"
        className="h-full flex flex-col gap-[60px] justify-center px-[25px] py-[50px] md:py-[100px] md:px-[25px]"
      >
        <ScrollAnimation>
          <div className="w-full flex items-center justify-center flex-col gap-[50px] md:gap-[70px]">
            <PageHeadings heading="Experiments" subHeading="Components" />
            <div className="flex w-full max-w-[1100px] md:gri gap-[20px] sm:gap-4 md:gap-[25px] md:grid-cols-3 grid-cols-2 pb-[5px]">
              <CardSlider cardData={getProduct}>
                {getProduct.map((item, index) => (
                  <div
                    key={index}
                    className="h-auto object-fit md:w-full w-full mx-[10px]"
                  >
                    <Cards
                      image={item.image}
                      btnText="Explore"
                      title={item.title}
                      description={item.description}
                      onClick={() => handleCardClick(item.path)}
                    />
                  </div>
                ))}
              </CardSlider>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Experiments;
