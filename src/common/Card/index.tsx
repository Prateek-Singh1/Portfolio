import React from "react";
import "./Cards.css";
import Button from "../Button";

interface CardsProps {
  image?: string;
  title?: string;
  btnText?: string;
  description?: string;
  onClick?: () => void;
  btn?: boolean;
}

const Cards: React.FunctionComponent<CardsProps> = ({
  image,
  title = "Noteworthy technology acquisitions 2021",
  description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  onClick,
  btn = true,
  btnText = "Read more",
}) => {
  return (
    <div className="relative w-[inherit] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#181818] dark:border-[#383737] group">
      <div className="overflow-hidden rounded-t-lg">
        <img
          loading="lazy"
          width="345"
          height="175"
          className="rounded-t-lg transform transition-transform duration-300 group-hover:scale-110"
          src={image}
          alt="Blog Cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-[10px] dark:border-x dark:border-b dark:border-[#383737] rounded-x-lg rounded-b-lg">
        <div>
          <h5 className="mb-2 text-[18px] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 custom-line-clamp">
          {description}
        </p>
        {btn ? (
          <Button
            svg={true}
            text={btnText}
            size="medium"
            color="orange"
            onClick={onClick}
          />
        ) : null}
        <div className="h-2 w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] w-[70%] m-auto rounded transition-all absolute bottom-[-1px] left-0"></div>
      </div>
    </div>
  );
};

export default Cards;
