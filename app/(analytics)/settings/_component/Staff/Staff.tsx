"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import Controllers from "@/components/Controllers/Controllers";
import { FilterObject, NewUser } from "@/types/types";
import { staffCol, staffRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import { FieldValues } from "react-hook-form";
import {
  useCreateStaff,
  useEditStaff,
  useGetAllStaff,
} from "../../_slice/qurey";
import ModalPopUp from "@/components/Modal/Modal";
import NewStaff from "../NewStaff/NewStaff";
import EditStaff from "../EditStaff/EditStaff";
import { useUserContext } from "@/context/AuthContext";
import DeleteStaff from "../DeleteStaff/DeleteStaff";
import { getUser } from "@/ProtectedRoute/ProtectedRoute";
import Toogle from "@/components/Filters/assets/toggle.svg";
import Boxes from "@/components/Filters/assets/boxes.svg";
import Check from "@/components/Filters/assets/clipCheck.svg";

type Props = {};

const Staff = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterObject | null>(null);
  const [singleRow, setSingleRow] = useState<{ [key: string]: any }>([]);
  const [addNewModal, setAddNewModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [content, setContent] = useState<ReactNode>("");
  const { mutateAsync: createStaff } = useCreateStaff();
  const { mutateAsync: editStaff } = useEditStaff();
  const user = getUser();

  const {
    isLoading: loading,
    data,
    isError,
  } = useGetAllStaff({ merchant_id: user?.id });
  let staff: NewUser[] | [] = data?.success?.users ?? [];

  const defaultFilters = [
    { id: 1, name: "Status", Img: Toogle },
    { id: 2, name: "Department", Img: Boxes },
    { id: 3, name: "Role", Img: Check },
  ];

  useEffect(() => {
    const determineContent = () => {
      if (addNewModal) {
        return (
          <NewStaff closeModal={closeModal} onSubmit={handleCreateStaff} />
        );
      } else if (editModal) {
        return (
          <EditStaff
            closeModal={closeModal}
            onSubmit={handleEditStaff}
            singleRow={singleRow}
          />
        );
      } else if (deleteModal) {
        return <DeleteStaff singleRow={singleRow} />;
      }

      return null;
    };

    setContent(determineContent());
  }, [addNewModal, editModal, deleteModal]);

  const closeModal = () => {
    setAddNewModal(false);
    setEditModal(false);
    setDeleteModal(false);
  };

  const openModal = () => {
    setEditModal(true);
  };

  const handleEditStaff = async (data: FieldValues) => {
    const response = await editStaff({ merchant_id: user?.id, ...data });
    response.success
      ? console.log("success", response.success)
      : console.log("error", response.error);

    closeModal();
  };

  const handleCreateStaff = async (data: FieldValues) => {
    const updatedData = { merchant_id: user?.id, ...data };

    const response: any = await createStaff(updatedData);

    response.success
      ? toast.success(response.success.message)
      : console.log("error", response.error);

    closeModal();
  };

  const staffStat = [
    {
      name: "Employee",
      amount: "9",
    },
    {
      name: "Department",
      amount: "3",
    },
  ];

  return (
    <section>
      <Header headerStat={staffStat} />
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
          defaultFilters={defaultFilters}
        />
        <TableComponent
          // rows={staffRow}
          rows={staff}
          columns={staffCol}
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

export default Staff;
