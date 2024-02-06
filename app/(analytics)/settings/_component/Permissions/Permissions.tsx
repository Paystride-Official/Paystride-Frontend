"use client";
import { permissionCol, permissionRow } from "@/Utils/constants";
import Controllers from "@/components/Controllers/Controllers";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";
import React, { useState } from "react";

type Props = {};

const Permissions = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  return (
    <section>
      <div
        className="    
           bg-white  
            rounded-[6.198px]
            border-[2.066px]
            border-solid
            border-[#eceef6]
            mt-4
            "
      >
        <Controllers
          search={search}
          setSearch={setSearch}
          filters={filters}
          setFilters={setFilters}
          addNew
        />
        <TableComponent
          // rows={staffRow}
          rows={permissionRow}
          columns={permissionCol}
          // openModal={openModal}
          // deleteModal={deleteModal}
          // setDeleteModal={setDeleteModal}
          // setSingleRow={setSingleRow}
        />
      </div>
    </section>
  );
};

export default Permissions;
