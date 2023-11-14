import React from "react";
import Arrowdown from "@/app/(analytics)/payment-point/assets/arrowdown.svg";
import Edit from "@/app/(analytics)/payment-point/assets/edit.svg";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { column, row } from "@/types/types";
import Image from "next/image";

type TableProps = {
  columns: column[];
  rows: row[];
};

export function DashboardTable({ rows, columns }: TableProps) {
  const renderCell = React.useCallback((column: column, columnKey: any) => {
    // const cellValue = column[columnKey as keyof column[]];

    switch (columnKey) {
      case "onDuty":
        return (
          <div className="flex item-center gap-4">
            <p>{column.onDuty}</p>
            <div className="flex item-center justify-center ">
              <Image src={Arrowdown} alt="arrow_down" />
            </div>
          </div>
        );
      case "status":
        return (
          <div className=" flex items-center gap-4">
            <p>{column.status}</p>
            <div className="flex item-center justify-center ">
              <Image src={Edit} alt="arrow_down" />
            </div>
          </div>
        );
      default:
        return column[columnKey];
    }
  }, []);

  return (
    <div className="mt-2 ">
      <Table
        removeWrapper
        aria-label="Example table with dynamic content"
        className="overflow-auto"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="bg-transparent border-b-[#EFEFEF] border-b border-solid text-[#949494] text-md"
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
                <TableCell className="text-[#949494]">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
