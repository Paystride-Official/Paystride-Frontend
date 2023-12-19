"use client";
import React, { ReactNode, useEffect, useState } from "react";
import SettingsSidebar from "./_component/SettingsSidebar/SettingsSidebar";
import BusinessInfo from "./_component/BusinessInfo/BusinessInfo";
import BankAccount from "./_component/BankAccount/BankAccount";
import Staff from "./_component/Staff/Staff";
import Permissions from "./_component/Permissions/Permissions";
import Password from "./_component/Password/Password";
import VirtualAccount from "./_component/virtualAccount/VirtualAccount";
import { FieldValues } from "react-hook-form";
import ModalPopUp from "@/components/Modal/Modal";
import NewStaff from "./_component/NewStaff/NewStaff";

type Props = {};

const Settings = (props: Props) => {
  const [selectedSettings, setSelectedSettings] = useState<string>("staff");
  const [addNewModal, setAddNewModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>("");

  const closeModal = () => {
    setAddNewModal(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleCickSettings = (item: string) => {
    setSelectedSettings(item);
  };

  useEffect(() => {
    const determineContent = () => {
      if (addNewModal) {
        return <NewStaff />;
      }
    };

    setContent(determineContent());
  }, [addNewModal]);

  const handleCreateStaff = (data: FieldValues) => {};

  const stepToRender = (key: string) => {
    switch (key) {
      case "bankAccount":
        return <BankAccount />;
      case "businessInfo":
        return <BusinessInfo />;
      case "staff":
        return (
          <Staff
            setAddNewModal={setAddNewModal}
            addNewModal={addNewModal}
            openModal={openModal}
          />
        );
      case "password":
        return <Password />;
      case "permissions":
        return <Permissions />;
      case "virtual":
        return <VirtualAccount />;

      default:
        break;
    }
  };

  return (
    <section className="flex">
      <SettingsSidebar
        selectedSetting={selectedSettings}
        setSelectedSettings={setSelectedSettings}
        handleClickSettings={handleCickSettings}
      />
      <div className="flex-[4] mt-10">{stepToRender(selectedSettings)}</div>

      <div>
        <ModalPopUp
          isOpen={addNewModal}
          closeModal={closeModal}
          body={content}
        />
      </div>
    </section>
  );
};

export default Settings;
