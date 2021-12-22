/**
 *  This component handles the text input from the user's search
 */
import React from "react";

interface Props {
  setSearchTerm: (e: string) => void;
  searchTerm: string;
}

const SearchInput = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <>
      <input
        className="border px-5 py-2 mx-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        value={searchTerm}
        placeholder="Search for breed..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
