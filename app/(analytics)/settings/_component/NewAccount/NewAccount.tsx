import React from "react";
import { useForm, FieldValues } from "react-hook-form";

type Props = {
  closeModal: () => void;
  onSubmit: (data: FieldValues) => void;
};

const NewAccount = ({ closeModal, onSubmit }: Props) => {
  const { handleSubmit, register, getValues, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    console.log(formData);

    reset();
  };

  const bankoptions = [
    { value: "", option: "" },
    { value: "access", option: "Access bank" },
    { value: "zenith", option: "Zenith bank" },
  ];

  return (
    <main>
      <h1 className="text-center font-bold capitalize text-3xl">
        Add New Account
      </h1>
      <form
        className="flex flex-col items-center justify-center my-4 gap-4"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex justify-center gap-6">
          <div>
            <p className="text-[12px] text-[#B9B9B9]">Account Number</p>
            <input
              type="text"
              placeholder="0010234590"
              {...register("account_number")}
              className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md w-32"
            />
          </div>
          <div className="">
            <p className="text-[12px] text-[#B9B9B9]">Bank</p>
            <select
              className="block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none w-32 rounded-md"
              {...register("bank")}
            >
              {bankoptions.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <p className="text-[12px] text-[#B9B9B9]">Account Name</p>
          <input
            type="text"
            placeholder="ABC Supermart"
            {...register("account_name")}
            className="bg-[#ECECEC] py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md w-[17.5rem]"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="defaultAcc" />
            <label
              htmlFor="defaultAcc"
              className="text-[12px] text-[#7F7F7F] ml-1"
            >
              Make this account the default account
            </label>
          </div>
        </div>

        <div className="flex gap-4 justify-center w-full mb-2 mt-12">
          <button
            type="submit"
            className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
          >
            Add Account
          </button>
          <button
            type="button"
            onClick={() => closeModal()}
            className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewAccount;
