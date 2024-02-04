import React, { useState } from "react";
import Arrowdown from "@/app/(analytics)/payment-point/assets/arrowdown.svg";
import Edit from "@/app/(analytics)/payment-point/assets/edit.svg";
import Delete from "@/components/Table/assets/Delete.svg";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { NewUser, column, row } from "@/types/types";
import Image from "next/image";

type TableProps = {
  columns: NewUser[] | undefined;
  rows: row[];
  openModal?: () => void;

  setSingleRow?: React.Dispatch<React.SetStateAction<object>>;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal?: boolean;
};

export function TableComponent({
  rows,
  columns,
  setSingleRow,
  openModal,
  deleteModal,
  setDeleteModal,
}: TableProps) {
  const getData = (column: object) => {
    if (column) {
      setSingleRow?.(column);
    }
  };

  const renderCell = React.useCallback((column: column, columnKey: any) => {
    // const cellValue = column[columnKey as keyof column[]];

    switch (columnKey) {
      case "name":
        return (
          <div>
            <p className="text-[#21272A] font-bold capitalize">{column.name}</p>
            <p>{column.phoneNumber}</p>
          </div>
        );

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
          <div className=" flex items-start gap-8">
            <p>{column.status}</p>
            {/* <div
              className="flex item-center justify-center gap-6 cursor-pointer"
              onClick={() => {
                openModal?.(), getData(column);
              }}
            >
              <Image src={Edit} alt="Edit" />
            </div> */}
          </div>
        );

      case "default":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.default} />
          </div>
        );

      case "dashboard":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.dashboard} />
          </div>
        );
      case "transaction":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.transaction} />
          </div>
        );
      case "paymentPoint":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.paymentPoint} />
          </div>
        );
      case "settlement":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.settlement} />
          </div>
        );
      case "settings":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.settings} />
          </div>
        );

      case "action":
        return (
          <div className="flex w-full item-start justify-start gap-6 cursor-pointer">
            <Image
              src={Edit}
              alt="Edit"
              width={15}
              height={15}
              onClick={() => {
                openModal?.(), getData(column);
              }}
            />
            <Image
              src={Delete}
              width={15}
              height={15}
              alt="Delete"
              onClick={() => setDeleteModal && setDeleteModal(!deleteModal)}
            />
          </div>
        );
      default:
        return column[columnKey];
    }
  }, []);

  return (
    <div className="mt-2  ">
      <Table
        removeWrapper
        aria-label="Example table with dynamic content"
        className="overflow-auto"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column?.key}
              style={{ overflowX: "auto" }}
              className="bg-[#FAFAFA]  border-b-[#EFEFEF] border-b border-solid text-[#949494] text-md"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={rows}
          emptyContent={"You haven't create any staff yet."}
        >
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
    </div>
  );
}
