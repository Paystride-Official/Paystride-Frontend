import React from "react";
import { useForm, FieldValues } from "react-hook-form";

type AuthorizeProps = {
  closeModal: () => void;
  //onSubmit: (data: FieldValues) => void;
};

const AuthorizePay = ({ closeModal }: AuthorizeProps) => {
  const { handleSubmit, register, getValues, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    console.log(formData);

    reset();
  };

  const PrimaryAccountOptions = [
    { value: "0001234578", option: "0001234578" },
    { value: "9876543221", option: "9876543221" },
  ];

  return (
    <main className="w-[22rem] mx-auto">
      <h5 className="text-center font-semibold text-sm mb-8">
        You are about to authorize this payment to a settlement account
      </h5>
      <form
        className="flex flex-col items-center justify-center my-4 gap-4"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex justify-center gap-6">
          <div>
            <div className="flex justify-between text-[12px] text-[#B9B9B9]">
              <span>Amount</span>
              <span className="text-[#462cda]">Edit</span>
            </div>

            <input
              type="text"
              placeholder="0010234590"
              {...register("amount_authorize")}
              className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md w-32"
            />
          </div>
          <div className="">
            <p className="text-[12px] text-[#B9B9B9]">Primary Account</p>
            <select
              className="block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none w-32 rounded-md"
              {...register("primary_account")}
            >
              {PrimaryAccountOptions.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-4 justify-center w-full mb-2 mt-12">
          <button
            type="submit"
            className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
          >
            Confirm
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

export default AuthorizePay;
