import Image from "next/image";
import React from "react";
import search from "@/components/Search/assets/Search.svg";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className=" flex gap-3  border border-solid border-[#E9ECEF] px-2">
      <Image src={search} alt="search" />
      <input
        type="text"
        className="outline-none border-[none] py-1 w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
