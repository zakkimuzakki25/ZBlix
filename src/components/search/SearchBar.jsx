import { useState } from "react";
import searchIcon from '../../assets/icon/Search.svg'

/* eslint-disable react/prop-types */
const SearchBar = ({ handleSubmit }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = () => {
    handleSubmit(searchKey);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="flex flex-row rounded-10 lg:px-2.5 gap-1.5 overflow-hidden bg-soft-white lg:w-400 lg:h-10 border-grey border"
    >
      <button
        className="flex justify-center lg:w-7 h-full cursor-pointer items-center focus:outline-none border-none hover:border-none"
        type="submit"
      >
        <img src={searchIcon}/>
      </button>
      <div className="flex w-full h-full items-center">
        <input
          type="text"
          id="key"
          placeholder={"Search"}
          className="focus:outline-none w-full bg-soft-white lg:text-sm text-grey placeholder:text-grey"
          autoComplete="off"
          required
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
