import React from "react";

type Props = {
  singleRow: {
    [key: string]: any;
  };
};

const DeleteStaff = ({ singleRow }: Props) => {
  return (
    <section className="flex flex-col gap-2 text-center">
      <h1 className="font-bold text-xl">
        Are you sure you want to delete this Staff?
      </h1>
      <div className="flex gap-4 justify-center w-full mb-2 mt-8">
        <button className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded">
          Confirm
        </button>
        <button className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded">
          cancel
        </button>
      </div>
    </section>
  );
};

export default DeleteStaff;
