import React from "react";

interface AnimatedButton {
  onClick?: () => void | Promise<void>;
  text: string;
  angle?: string;
}

const AnimatedButton: React.FC<AnimatedButton> = ({onClick, text= 'Send', angle = '180'}) => {
  return (
    <>
      <button
        className="bg-white text-center w-fit rounded-[25px] h-[46px] relative text-black text-[17px] font-semibold cursor-pointer pr-18 pl-4 outline-2 outline-white group"
        type="button"
        onClick={onClick}
      >
        <div className="bg-[var(--primary-color)] rounded-[25px] h-[46px] w-12 flex items-center justify-center absolute right-[0px] top-[0px] group-hover:w-full z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#ffffff"
            />
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <p className="translate-x-2">{text}</p>
      </button>
    </>
  );
};

export default AnimatedButton;
