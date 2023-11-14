import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const Password = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();
  return (
    <section>
      <form
        action=""
        className="w-[90%] flex flex-col justify-between mx-auto gap-2 "
      >
        <Input
          register={register}
          id="new_oassword"
          type="password"
          label="New Password"
          placeholder=""
        />

        <Input
          register={register}
          label="Confirm New password"
          id="password"
          placeholder=""
          type="password"
        />
        <div className=" w-[90%] mx-auto mt-4">
          <button className="bg-[#091F8E] rounded-md text-white py-2 px-4">
            update User
          </button>
        </div>
      </form>
    </section>
  );
};

export default Password;
