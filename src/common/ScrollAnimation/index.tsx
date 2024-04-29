import React, { useState, useEffect, useRef, ReactNode } from 'react';
import './ScrollAnimation.css'; // Import CSS for animation styles

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FunctionComponent<ScrollAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Check if element is in the viewport
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-animation ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
