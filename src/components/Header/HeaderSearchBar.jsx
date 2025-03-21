import React from "react";
import { Search } from "lucide-react";
const HeaderSearchBar = ({ isSearchOpen }) => {
  return (
    <>
      {isSearchOpen && (
        <div className="fixed overflow-hidden bg-white top-[80px] w-full h-[calc(100vh-80px)] z-50 border-t border-t-[#dbdbdb]">
          <div className="mx-auto w-10/12 my-3 flex item-center">
            <input
              type="text"
              placeholder="Enter your Search Keyword here..."
              className="w-full p-2 focus:outline-none"
            />
            <Search className="w-5 h-10 mx-2 cursor-pointer text-black" />
          </div>
          <div className="bg-[#dbdbdb] h-[1px] w-full"></div>
        </div>
      )}
    </>
  );
};

export default HeaderSearchBar;
