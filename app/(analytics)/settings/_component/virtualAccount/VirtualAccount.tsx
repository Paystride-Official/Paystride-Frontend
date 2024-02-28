import { staffCol, staffRow, virtualCol, virtualRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import React from "react";

type Props = {};

const VirtualAccount = (props: Props) => {
  return (
    <div
      className="    
           bg-white  
            rounded-[6.198px]
            border-[2.066px]
            border-solid
            border-[#eceef6]
            mt-4
            pt-4
            px-4
            "
    >
      <div>
        <button className="px-4 py-2 bg-[#091F8E] text-white rounded-md mb-2">
          + New virtual Account
        </button>
      </div>
      <TableComponent
        rows={virtualRow}
        columns={virtualCol}
        // openModal={openModal}
        // setSingleRow={setSingleRow}
      />
    </div>
  );
};

export default VirtualAccount;
