import React, { ReactNode, useState, useEffect } from "react";
import { DirectionArrow } from "../../assets/svg/svg";

interface CardSliderProps {
  children?: ReactNode;
  cardData: any;
}

const CardSlider: React.FC<CardSliderProps> = ({ children, cardData }) => {
  // State to track current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const childrenArray = React.Children.toArray(children);


  // Responsive handler for different screen sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile view
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        // Tablet view
        setCardsPerView(2);
      } else {
        // Desktop view
        setCardsPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate to previous cards
  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerView;
      return newIndex < 0 ? cardData.length + newIndex : newIndex;
    });

    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Navigate to next cards
  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex + cardsPerView) % cardData.length
    );

    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="w-full mx-auto mb-[60px]">
      <div className="relative">
        {/* Card slider container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-300 ease-in-out pb-2"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / cardData.length
              }%)`,
              width: `${(100 * cardData.length) / cardsPerView}%`,
            }}
          >
            {children}
          </div>
        </div>

        <div className="absolute -bottom-[80px] w-full items-center justify-center p-2 gap-3 flex">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className={`h-[40px] w-[40px] bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 z-10 cursor-pointer flex items-center justify-center ${
              childrenArray.length > 3 ? "" : "lg:hidden"
            }`}
            aria-label="Previous cards"
          >
            <DirectionArrow color={""} className={""} rotate="-135" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className={`h-[40px] w-[40px] bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 z-10 cursor-pointer flex items-center justify-center ${
              childrenArray.length > 3 ? "" : "lg:hidden"
            }`}
            aria-label="Next cards"
          >
            <DirectionArrow color={""} className={""} rotate="45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
