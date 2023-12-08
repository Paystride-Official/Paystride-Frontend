import React from "react";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Export from "../Export/Export";
import AddNew from "../AddNew/AddNew";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filters: FilterObject | null;
  setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
  addNew?: boolean;
  setAddNewModal?: React.Dispatch<React.SetStateAction<boolean>>;
  addNewModal?: boolean;
};

interface FilterObject {
  [key: string]: any;
}
const Controllers = ({
  search,
  setSearch,
  addNew,
  filters,
  setFilters,
  addNewModal,
  setAddNewModal,
}: Props) => {
  return (
    <section className="flex justify-between items-center px-4 pt-4">
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="flex gap-4">
        {addNew && (
          <div>
            <button
              onClick={() => setAddNewModal && setAddNewModal(!addNewModal)}
              className="border border-solid bg-[#091F8E] text-white border-[#DDE2FD] px-4 py-1 rounded-md"
            >
              AddNew
            </button>
          </div>
        )}
        <div>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div>
          <Export />
        </div>
      </div>
    </section>
  );
};

export default Controllers;
