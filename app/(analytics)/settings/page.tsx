"use client";
import React, { useState } from "react";
import SettingsSidebar from "./_component/SettingsSidebar/SettingsSidebar";
import BusinessInfo from "./_component/BusinessInfo/BusinessInfo";
import BankAccount from "./_component/BankAccount/BankAccount";
import Staff from "./_component/Staff/Staff";
import Permissions from "./_component/Permissions/Permissions";
import Password from "./_component/Password/Password";
import VirtualAccount from "./_component/virtualAccount/VirtualAccount";
import { useForm } from "react-hook-form";

type Props = {};

const Settings = (props: Props) => {
  const { reset } = useForm();
  const [selectedSettings, setSelectedSettings] = useState<string>("staff");

  const handleCickSettings = (item: string) => {
    setSelectedSettings(item);
  };

  const stepToRender = (key: string) => {
    switch (key) {
      case "bankAccount":
        return <BankAccount />;
      case "businessInfo":
        return <BusinessInfo />;
      case "staff":
        return <Staff />;
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
    </section>
  );
};

export default Settings;
