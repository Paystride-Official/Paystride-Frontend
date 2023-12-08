import React from "react";

type Props = {
  openModal: () => void;
};

const AddNew = ({ openModal }: Props) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
          openModal();
        }}
        className="border border-solid bg-[#091F8E] text-white border-[#DDE2FD] px-4 py-1 rounded-md"
      >
        AddNew
      </button>
    </div>
  );
};

export default AddNew;
