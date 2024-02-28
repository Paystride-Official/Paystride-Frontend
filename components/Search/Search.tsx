import Image from "next/image";
import React from "react";
import searchIcon from "@/components/Search/assets/Search.svg";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className=" flex gap-3  border border-solid border-[#E9ECEF] px-2">
      <Image src={searchIcon} alt="search" />
      <input
        type="text"
        className="outline-none border-[none] py-1 w-full"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
