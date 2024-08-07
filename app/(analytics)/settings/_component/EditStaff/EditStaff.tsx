import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  singleRow: {
    [key: string]: any;
  };
  closeModal: () => void;
  onSubmit: (data: FieldValues) => void;
};

const EditStaff = ({ closeModal, onSubmit, singleRow }: Props) => {
  const { register, handleSubmit } = useForm();
  return (
    <main>
      {/* <section className="flex"> */}

      <form
        className="flex flex-col items-center justify-center my-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-[12px] text-[#B9B9B9]">Name</p>
          <input
            type="text"
            placeholder="paypoint 1"
            value={singleRow.name}
            {...register("name")}
            disabled
            className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
          />
        </div>
        <div className="">
          <p className="text-[12px] text-[#B9B9B9]">Phone Number</p>
          <input
            type="text"
            placeholder="paypoint 1"
            value={singleRow.phone_number}
            {...register("phone_number")}
            disabled
            className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
          />
        </div>
        <div className="">
          <p className="text-[12px] text-[#B9B9B9]">Email</p>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={singleRow.email}
            {...register("email")}
            disabled
            className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
          />
        </div>
        {/* </section> */}

        {/* <section> */}
        <div>
          <p className="text-[12px] text-[#B9B9B9]">Password</p>
          <input
            type="password"
            placeholder="paypoint 1"
            value={singleRow.password}
            {...register("password")}
            disabled
            className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
          />
        </div>
        <div>
          <p className="text-[12px]">Role</p>
          <input
            type="text"
            value={singleRow.role}
            placeholder="paypoint 1"
            {...register("role")}
            className=" py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
          />
        </div>
        {/* </section> */}
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
    </main>
  );
};

export default EditStaff;
