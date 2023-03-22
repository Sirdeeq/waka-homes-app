import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search for building"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="p-4">
          <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.565 19.435l-3.617-3.617a6.975 6.975 0 001.441-4.281c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.466 0 2.821-.45 3.956-1.216l3.617 3.617c.293.293.677.439 1.061.439.384 0 .768-.146 1.061-.439a1.5 1.5 0 000-2.121zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
