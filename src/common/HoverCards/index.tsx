import React from "react";

interface HoverCardsProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const HoverCards: React.FC<HoverCardsProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="relative overflow-hidden hover:shadow-xl hover:transform hover:-translate-y-1 rounded-lg shadow-md transition-all duration-500 border-1 border-[#E7E7E7] bg-white dark:bg-[#181818] dark:border-x dark:border-b dark:border-[#383737] group">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-stone-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 p-4">
        <div className="flex gap-2 md:items-center mb-2 transition-colors duration-500 text-[var(--primary-color)] group-hover:text-white">
          <Icon size={20} className="mr-2" />
          <h3 className="font-bold text-[13px]">{title}</h3>
        </div>
        <p className="text-[13px] transition-colors duration-500 text-gray-600 dark:text-[#808080] group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoverCards;
