import React from "react";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Export from "../Export/Export";
import AddNew from "../AddNew/AddNew";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filters: string;
  setFilters: React.Dispatch<React.SetStateAction<string>>;
  addNew?: boolean;
};

const Controllers = ({ search, setSearch, addNew }: Props) => {
  return (
    <section className="flex justify-between items-center px-4 pt-4">
      <div>
        <Search />
      </div>
      <div className="flex gap-4">
        {addNew && (
          <div>
            <AddNew />
          </div>
        )}
        <div>
          <Filters />
        </div>
        <div>
          <Export />
        </div>
      </div>
    </section>
  );
};

export default Controllers;
