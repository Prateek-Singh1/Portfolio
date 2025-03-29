const onHoverStrokeColor =
  "color000000 svgShape transition-all duration-300 stroke-[var(--primary-color)] group-hover:stroke-white";
const onHoverFillColor =
  "color000000 svgShape transition-all duration-300 fill-[var(--primary-color)] group-hover:fill-white";

export const Layout = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 20 20"
      id="layout"
    >
      <g
        id="Page-1"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g
          id="Artboard"
          stroke="var(--primary-color)"
          strokeWidth="2"
          transform="translate(-1746 -1691)"
          className={onHoverStrokeColor}
        >
          <g id="layout" transform="translate(1747 1692)">
            <rect
              id="Rectangle-path"
              width="18"
              height="18"
              x="0"
              y="0"
              rx="2"
            ></rect>
            <path id="Shape" d="M0 6h18M6 18V6"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Code = () => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 512 512"
      id="Code"
    >
      <path
        d="M168 392a23.929 23.929 0 0 1-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569 0-33.941l112-112c9.373-9.372 24.568-9.372 33.941 0 9.371 9.372 9.371 24.568 0 33.941L89.941 256l95.029 95.029c9.371 9.373 9.371 24.568 0 33.941A23.925 23.925 0 0 1 168 392zM344 392a23.929 23.929 0 0 0 16.971-7.029l112-112c9.373-9.373 9.373-24.569 0-33.941l-112-112c-9.373-9.372-24.568-9.372-33.941 0-9.371 9.372-9.371 24.568 0 33.941L422.059 256l-95.029 95.029c-9.371 9.373-9.371 24.568 0 33.941A23.925 23.925 0 0 0 344 392z"
        fill="var(--primary-color)"
        className={onHoverFillColor}
      ></path>
    </svg>
  );
};

export const Cpu = () => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="Cpu"
    >
      <rect width="256" height="256" fill="none"></rect>
      <rect
        width="56"
        height="56"
        x="100"
        y="100"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></rect>
      <rect
        width="160"
        height="160"
        x="48"
        y="48"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        rx="8"
        className={onHoverStrokeColor}
      ></rect>
      <line
        x1="208"
        x2="232"
        y1="104"
        y2="104"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="208"
        x2="232"
        y1="152"
        y2="152"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="24"
        x2="48"
        y1="104"
        y2="104"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="24"
        x2="48"
        y1="152"
        y2="152"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="152"
        x2="152"
        y1="208"
        y2="232"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="104"
        x2="104"
        y1="208"
        y2="232"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="152"
        x2="152"
        y1="24"
        y2="48"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
      <line
        x1="104"
        x2="104"
        y1="24"
        y2="48"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        className={onHoverStrokeColor}
      ></line>
    </svg>
  );
};

export const Profile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      id="group"
    >
      <path
        fill="var(--primary-color)"
        d="M18.052 14.762c.086.134.21.238.353.306A3.25 3.25 0 0 1 20.25 18v2a.75.75 0 0 0 1.5 0v-2A4.75 4.75 0 0 0 17 13.25c-.109 0-.158.14-.076.211a6.03 6.03 0 0 1 1.128 1.301Z"
        className={onHoverFillColor}
      ></path>
      <path
        fill="var(--primary-color)"
        fillRule="evenodd"
        d="M7 14.75A3.25 3.25 0 0 0 3.75 18v2a.75.75 0 0 1-1.5 0v-2A4.75 4.75 0 0 1 7 13.25h6A4.75 4.75 0 0 1 17.75 18v2a.75.75 0 0 1-1.5 0v-2A3.25 3.25 0 0 0 13 14.75H7Z"
        clipRule="evenodd"
        className={onHoverFillColor}
      ></path>
      <path
        fill="var(--primary-color)"
        d="M14.87 9.557c.09-.169.23-.304.396-.4a2.499 2.499 0 0 0 0-4.314 1.03 1.03 0 0 1-.396-.4 5.514 5.514 0 0 0-.933-1.283C13.88 3.1 13.917 3 14 3a4 4 0 0 1 0 8c-.083 0-.12-.1-.063-.16.37-.378.685-.81.933-1.283Z"
        className={onHoverFillColor}
      ></path>
      <path
        fill="var(--primary-color)"
        fillRule="evenodd"
        d="M10 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
        className={onHoverFillColor}
      ></path>
    </svg>
  );
};

export const OpenBook = () => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      id="BookOpen"
      className={onHoverStrokeColor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
        className={onHoverStrokeColor}
      ></path>
    </svg>
  );
};

export const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 50 50"
    >
      <path
        d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"
        className={onHoverFillColor}
      ></path>
    </svg>
  );
};

export const SearchBarIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
  );
};
