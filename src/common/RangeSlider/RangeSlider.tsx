import React, { useEffect, useState } from "react";
import "./style.css";

interface RangeSliderProps {
  title: string;
  min: number;
  max: number;
  value: number;
  step: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  title,
  min,
  max,
  value,
  step,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 10;
    const increment = (value - start) / (duration / stepTime);

    const animate = setInterval(() => {
      start += increment;
      if (start >= value) {
        setAnimatedValue(value);
        clearInterval(animate);
      } else {
        setAnimatedValue(Math.round(start)); // Ensure rounded values
      }
    }, stepTime);

    return () => clearInterval(animate);
  }, [value]);

  // Ensure the percentage calculation does not include decimals
  const percentage = Math.round((animatedValue / max) * 100);

  return (
    <>
      <div className="range-title">
        <div>{title}</div>
        <div>{percentage}%</div>
      </div>
      <div className="relative w-full">
        <div>
            <input
              aria-label="Range slider"
              type="range"
              min={min}
              max={percentage}
              step={step}
              value={animatedValue}
              style={{ width: `${percentage}%` }}
              className="w-full range-slider"
              readOnly
            />
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
