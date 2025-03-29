import { useEffect } from "react";

export const scrollToSection = (sectionId: string, yOffset = 0) => {
  const element = document.getElementById(sectionId);

  if (element) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

interface LogoProps {
  onClick?: (name: string, value: number) => void;
}

export const LogoMain: React.FC<LogoProps> = ({ onClick }) => {
  const getRoute = window.location.href.includes("/components");
  
  return (
    <div className="logo-head" onClick={() => onClick?.("Home", -140)}>
      <div className="header-title-container">
        <div className="header-logo text-white">P</div>
        <b className={`text-[18px] font-[600] hidden lg:block ${getRoute ? 'text-[#321a50]' : 'text-white'} dark:text-white`}>Singh</b>
      </div>
    </div>
  );
};
