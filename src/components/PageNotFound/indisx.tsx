import React from "react";
import Button from "../../common/Button";

const PageNotFound: React.FC = () => {
  return (
    <>
      <section id="page-not-found">
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4 overflow-hidden">
          <div className="relative max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8 text-center">
            {/* Animated 404 Text */}
            <div className="relative">
              <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 opacity-10 blur-lg bg-gradient-to-r from-blue-500 to-purple-600 animate-bounce"></div>
            </div>

            {/* Floating Illustration */}
            <div className="relative my-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 300"
                className="w-full max-h-60 mx-auto animate-float"
              >
                {/* Lost Robot Illustration */}
                <path
                  d="M200 180 Q250 220, 300 180"
                  fill="none"
                  stroke="#888"
                  strokeWidth="4"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="70"
                  fill="#3B82F6"
                  className="animate-spin-slow"
                />
                <rect
                  x="170"
                  y="100"
                  width="60"
                  height="80"
                  fill="#4338CA"
                  rx="10"
                />
                <circle cx="180" cy="130" r="10" fill="white" />
                <circle cx="220" cy="130" r="10" fill="white" />
                <path
                  d="M190 160 Q200 180, 210 160"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The page you're looking for seems to have wandered off into the
              digital wilderness.
            </p>

            {/* Home Button */}
            
              <Button text='Return Home' onClick={() => (window.location.href = "/")}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
