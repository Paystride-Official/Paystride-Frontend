import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type EditPayPointProps = {
  singleRow: {
    [key: string]: any;
  };
  onSubmit: (data: FieldValues) => void;
  closeModal: () => void;
};

export const EditPayPoint = ({
  singleRow,
  onSubmit,
  closeModal,
}: EditPayPointProps) => {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center capitalize mt-[-1rem] mb-[1rem]">
        {singleRow.payPoint}
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <p className="my-[-0.5rem]">staff</p>
        <select
          className=" block border-[0.889px] border-solid
        border-[#D9D9D9] px-2 py-2 outline-none max-w-[10rem] rounded-sm"
          {...register("example")}
        >
          <option value="option1">{singleRow.onDuty}</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <p className="my-[-.5rem]">status</p>
        <select
          className=" block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none w-fit rounded-sm"
          {...register("example2")}
        >
          <option value={singleRow?.status}>{singleRow?.status}</option>
          <option value="option2">Inactive</option>
        </select>

        <div className="flex gap-4 justify-center w-full mb-2">
          <button
            type="submit"
            className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
          >
            update
          </button>
          <button
            type="button"
            onClick={() => closeModal()}
            className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
