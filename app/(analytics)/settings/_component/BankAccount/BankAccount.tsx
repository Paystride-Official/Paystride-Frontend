"use client";
import React, { ReactNode, useEffect, useState } from "react";

import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import Controllers from "@/components/Controllers/Controllers";
import { TableComponent } from "@/components/Table/Table";
import { FilterObject } from "@/types/types";
import { bankCol, bankRow } from "@/Utils/constants";
import NewAccount from "../NewAccount/NewAccount";
import ModalPopUp from "@/components/Modal/Modal";
import EditAccount from "../EditAccount/EditAccount";
import DeleteAccount from "../DeleteAccount/DeleteAccount";
import { useGetAllSettlementAccount } from "@/app/(analytics)/settlement/_slice/query";

type Props = {};

const BankAccount = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const [addNewModal, setAddNewModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [content, setContent] = useState<ReactNode>("");

  console.log("delete", deleteModal);
  const {
    isLoading,
    data: settlementAccounts,
    isError,
  } = useGetAllSettlementAccount();

  const bankStat = [
    {
      name: "Active count",
      amount: settlementAccounts?.success?.total || "0",
    },
  ];

  const closeModal = () => {
    setAddNewModal(false);
    setEditModal(false);
    setDeleteModal(false);
  };

  const openModal = () => {
    setEditModal(true);
  };

  useEffect(() => {
    const determineContent = () => {
      if (addNewModal) {
        return <NewAccount closeModal={closeModal} />;
      } else if (editModal) {
        return (
          <EditAccount
            closeModal={closeModal}
            //onSubmit={handleEditAccount}
            singleRow={singleRow}
          />
        );
      } else if (deleteModal) {
        return <DeleteAccount singleRow={singleRow} closeModal={closeModal} />;
      }

      return null;
    };

    setContent(determineContent());
  }, [addNewModal, editModal, deleteModal]);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <section>
      <Header headerStat={bankStat} />

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
          addNewModal={addNewModal}
          setAddNewModal={setAddNewModal}
        />
        <TableComponent
          rows={settlementAccounts?.success?.accounts || []}
          columns={bankCol}
          openModal={openModal}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          setSingleRow={setSingleRow}
        />
      </div>
      <div>
        <ModalPopUp
          isOpen={addNewModal || editModal || deleteModal}
          closeModal={closeModal}
          body={content}
        />
      </div>
    </section>
  );
};

export default BankAccount;
