import React, { useState } from "react";
import Arrowdown from "@/app/(analytics)/payment-point/assets/arrowdown.svg";
import Edit from "@/app/(analytics)/payment-point/assets/edit.svg";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { column, row } from "@/types/types";
import Image from "next/image";

type TableProps = {
  columns: column[];
  rows: row[];
  openModal?: () => void;

  setSingleRow?: React.Dispatch<React.SetStateAction<object>>;
};

type MyFunctionType = () => { [key: string]: any };

export function DashboardTable({
  rows,
  columns,
  setSingleRow,
  openModal,
}: TableProps) {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const getData = (column: object) => {
    if (column) {
      setSingleRow?.(column);
    }
  };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const renderCell = React.useCallback((column: column, columnKey: any) => {
    // const cellValue = column[columnKey as keyof column[]];

    switch (columnKey) {
      case "onDuty":
        return (
          <div
            onClick={() => {
              openModal?.(), getData(column);
            }}
            className="flex item-center gap-8 cursor-pointer "
          >
            <p>{column.onDuty}</p>
            <div className="flex item-center justify-center ">
              <Image src={Arrowdown} alt="arrow_down" />
            </div>
          </div>
        );
      case "status":
        return (
          <div className=" flex items-center gap-8">
            <p>{column.status}</p>
            <div
              className="flex item-center justify-center gap-6 cursor-pointer"
              onClick={() => {
                openModal?.(), getData(column);
              }}
            >
              <Image src={Edit} alt="Edit" />
            </div>
          </div>
        );
      default:
        return column[columnKey];
    }
  }, []);

  return (
    // <div className="mt-2 mx-4 ">
    <Table
      removeWrapper
      aria-label="Example table with dynamic content"
      className="overflow-auto"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            style={{ overflowX: "auto" }}
            className="bg-[#FAFAFA]  border-b-[#EFEFEF] border-b border-solid text-[#949494] text-md"
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {/* <TableBody emptyContent={"No rows to display."}>{[]}</TableBody> */}
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell
                className="text-[#949494]"
                style={{ overflowX: "auto" }}
              >
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
