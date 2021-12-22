/**
 *  This component sets up the navigation for the page
 */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SITE_TITLE } from "utils/constants";

const SelectBreed = dynamic(() => import("components/SelectBreed"))
const SearchInput = dynamic(() => import("components/SearchInput"))

interface Props {
  setCurrentBreed: (e: string | null) => void;
  resetSearch: () => void;
  setSearchTerm: (e: string) => void;
  searchTerm: string;
}

const SearchBar = ({
  setCurrentBreed,
  resetSearch,
  searchTerm,
  setSearchTerm,
}: Props) => {
  return (
    <nav className="border-b pb-3 mb-4 flex flex-col md:flex-row md:justify-between">
      <Link href="/">
        <a>
          <h1 className="text-4xl font-bold text-orange-500">{SITE_TITLE}</h1>
        </a>
      </Link>
      <div>
        <SearchInput 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          
        />
        <SelectBreed
          resetSearch={resetSearch}
          setCurrentBreed={setCurrentBreed}
        />
        <button className="ml-4 px-4 py-2 bg-gray-100 border rounded"onClick={() => resetSearch()}>Reset</button>
      </div>
    </nav>
  );
};

export default SearchBar;
