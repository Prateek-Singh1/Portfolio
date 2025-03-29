import React from "react";
import { SearchBarIcon } from "../../assets/svg/icons";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <section id="search-bar" className="w-full h-full">
      <div className="relative w-full h-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchBarIcon />
        </div>
        <input
          type="text"
          id="topbar-search"
          className="bg-gray-50 w-full h-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchBar;
