import React from "react";
import "./LoadingScreen.css";

const LoadingScreen: React.FunctionComponent = () => {
  return (
    <section id="loading-screen">
      <div className="loader-wrapper flex md:hidden">
        <div className="loading-box-shadow"></div>
        <div className="loading-box"></div>
        <div className="loading-text">Loading...</div>
      </div>
      <div className="hidden md:block h-screen">
        <div className="min-h-screen bg-white p-4 h-full">
          {/* Nav Skeleton */}
          <div className="flex justify-center items-center mb-12">
            <div className="hidden bg-gray-200 md:flex max-w-[1100px] w-full justify-between p-[10px] rounded-[50px] h-[66px] items-center">
              <div className="bg-white h-[48px] w-[48px] animate-pulse rounded-3xl"></div>
              <div className="flex gap-[16px]">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="bg-white h-[34px] w-16 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="bg-white h-[48px] w-[48px] animate-pulse rounded-3xl"></div>
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="flex flex-col items-center h-full">
            <div className="w-[500px] space-y-8 flex flex-col items-center justify-center">
              {/* Hello Badge Skeleton */}
              <div className="flex justify-center md:justify-start mb-[16px]">
                <div className="bg-gray-200 h-10 w-24 rounded-full animate-pulse"></div>
              </div>

              {/* Name and Title Skeleton */}
              <div className="space-y-4 w-full flex flex-col items-center justify-center">
                <div className="bg-gray-200 h-12 w-3/4 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-12 w-full rounded animate-pulse"></div>
              </div>
            </div>
            <div className="relative flex justify-center h-full max-w-[1100px] w-full items-end">
              <div className="max-w-[1100px] w-full flex justify-center">
                <div className="h-[460px] w-[740px] bg-gray-200 animate-pulse rounded-tl-full rounded-tr-full "></div>
                <div className="absolute w-[inherit] flex items-center justify-between">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-[5px] w-[220px]">
                      {[...Array(3)].map((_, j) => (
                        <div
                          className="bg-gray-200 h-8 rounded animate-pulse"
                          key={j}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Settings Button Skeleton */}
          <div className="fixed bottom-6 right-6">
            <div className="bg-gray-200 h-12 w-12 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;
