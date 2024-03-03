import classNames from "classnames";
import React from "react";

type Props = {
  setSelectedSettings: React.Dispatch<React.SetStateAction<string>>;
  handleClickSettings: (item: string) => void;
  selectedSetting: string;
};

const SettingsSidebar = ({
  setSelectedSettings,
  handleClickSettings,
  selectedSetting,
}: Props) => {
  const handleChangeSettingsMenu = (key: string) => {
    setSelectedSettings(key);
  };

  const settingsSidebar = [
    {
      key: "businessInfo",
      text: "Business Info",
    },
    {
      key: "virtual",
      text: "Virtual Accounts",
    },
    {
      key: "bankAccount",
      text: "Bank Account",
    },
    {
      key: "staff",
      text: "Staff",
    },
    {
      key: "permissions",
      text: "Permissions",
    },
    {
      key: "password",
      text: "Password",
    },
  ];

  return (
    <div className="flex-[1]">
      <h1 className="font-bold text-3xl mb-4 p-2">Settings</h1>
      <div className=" w-full  border-solid flex flex-col text-start gap-5  ">
        {settingsSidebar.map(({ key, text }) => {
          const isActive = selectedSetting === key;

          return (
            <span
              onClick={() => handleClickSettings(key)}
              key={key}
              className={classNames(
                `sideline flex items-center font-medium hover:text-[#091F8E] cursor-pointer relative text-md`,
                { "text-[#091F8E] active": isActive },
                { "text-[#697077]": !isActive }
              )}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSidebar;
