import React from "react";

type Props = {
  setSelectedSettings: React.Dispatch<React.SetStateAction<string>>;
};

const SettingsSidebar = ({ setSelectedSettings }: Props) => {
  const handleChangeSettingsMenu = (key: string) => {
    setSelectedSettings(key);
  };

  const settingsSidebar = [
    {
      key: "businessInfo",
      text: "Business Information",
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
      <h1 className="font-bold text-3xl mb-4">Settings</h1>
      <div className=" border-l-[#D9D9D9] border-l border-solid flex flex-col text-start gap-6 pl-2">
        {settingsSidebar.map(({ key, text }) => (
          <span
            onClick={() => handleChangeSettingsMenu(key)}
            key={key}
            className="text-[#697077] font-medium hover:text-[#091F8E] cursor-pointer"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SettingsSidebar;
