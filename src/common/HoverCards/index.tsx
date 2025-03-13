import React, { useState } from "react";

interface HoverCardsProps {
  skill: string;
  description: string;
  icon: React.ElementType;
}

const HoverCards: React.FC<HoverCardsProps> = ({
  skill,
  description,
  icon: Icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-500 border-1 border-[#E7E7E7] group ${
        isHovered ? "shadow-xl transform -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient that appears on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-stone-900 opacity-0 transition-opacity duration-500
 ${
          isHovered ? "opacity-100" : ""
        }`}
      />

      {/* Content */}
      <div className="relative z-10 p-4">
        <div
          className={`flex gap-2 md:items-center mb-2 transition-colors duration-500 ${
            isHovered ? "text-white" : "text-[var(--primary-color)]"
          }`}
        >
          <Icon size={20} className="mr-2" />
          <h3 className="font-bold text-[12px] md:text-sm">{skill}</h3>
        </div>
        <p
          className={`text-xs transition-colors duration-500 ${
            isHovered ? "text-white" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoverCards;
