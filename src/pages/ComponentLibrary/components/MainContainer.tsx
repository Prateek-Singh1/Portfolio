import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Debouncing from "../../../playground/uiComponents/Debouncing";
import InfiniteScrolling from "../../../playground/uiComponents/InfiniteScrolling";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../index.css";
import { useGet } from "../../../api/apiService";
import parse from 'html-react-parser';

interface Points {
  question: string
  answer: string
}

const MainContainer = () => {
  const { componentName } = useParams();
  const url = `../../../../public/JSON/${componentName}.json`;
  const { data } = useGet(url);

  const componentMap: Record<string, React.FC> = {
    "infinite-scrolling": InfiniteScrolling,
    debouncing: Debouncing,
  };

  const SelectedComponent =
    componentMap[componentName || ""] || (() => <p>Component Not Found</p>);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [componentName]);

  return (
    <section id="main-container">
      <main className="p-6 md:ml-64 pt-25 h-full ">
        <div className="pb-4 mb-8 dark:border-gray-800">
          <div className="text-[30px] font-extrabold leading-[36px] inline-block mb-2 text-3xl tracking-tight text-gray-900 dark:text-white">
            {data?.title}
          </div>
          {data?.description.map((points: Points, index:number) => {
            return (
              <div key={index} className="component-details">
                <TitleWithDescription title={points.question} description={points.answer}/>
              </div>
            );
          })}

          <div className="flex items-center justify-center">
            <div className="w-full flex items-center flex-col justify-center my-[40px] border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700 md:max-w-[90%] 2xl:max-w-[60%]">
              <div className="inline-block px-3 text-gray-800 border-r border-gray-200 dark:text-white dark:border-gray-600 w-full p-4 border-b border-b-gray-200 bg-gray-50 rounded-t-xl dark:border-b-gray-600 dark:bg-gray-700">
                Preview
              </div>
              <div className="h-[400px] md:h-[550px] w-full grid grid-cols-1 gap-24 customScrollBar overflow-x-hidden pl-[5px]">
                <SelectedComponent />
              </div>
              <div className="inline-block px-3 text-gray-800 border-t border-gray-200 dark:text-white dark:border-gray-600 w-full p-4 border-b border-b-gray-200 bg-gray-50 dark:border-b-gray-600 dark:bg-gray-700">
                Code
              </div>
              <code className="code-base w-full text-black dark:text-white bg-[#f9fafb;] dark:bg-[#1c2029] px-5 py-5 overflow-x-scroll">
                <SyntaxHighlighter language="jsx" style={{}}>
                  {data?.codeSnippet}
                </SyntaxHighlighter>
              </code>
              <p className="hidden cursor-pointer text-center px-3 text-gray-800 hover:bg-[#f3f4f6] dark:hover:bg-gray-700 border-t border-gray-200 dark:text-white dark:border-gray-600 w-full p-4 border-b border-b-gray-200 bg-gray-50 dark:border-b-gray-600 dark:bg-gray-700">
                Expand code
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default MainContainer;

interface TitleWithDescriptionProps {
  title: string;
  description?: string;
}

export const TitleWithDescription: React.FC<TitleWithDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <h2 className="text-[24px] font-semibold leading-[32px] mt-[32px] mb-[16px] text-black dark:text-white">
        {parse(title)}
      </h2>
      <p className="mb-4 text-lg text-gray-600 dark:text-[#808080]">
        {parse(description || '')}
      </p>
    </>
  );
};
