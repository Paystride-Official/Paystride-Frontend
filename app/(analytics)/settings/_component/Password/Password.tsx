import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useUpdatePassword } from "../../_slice/qurey";
import { toast } from "react-toastify";

type Props = {};

const Password = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const { mutateAsync: updataPassword } = useUpdatePassword();

  const handleOnSubmit = async (data: FieldValues) => {
    if (data.new_password !== data.confirm_password) {
      toast.error("password do not match");
      return;
    }

    const response = await updataPassword(data);
    response.success
      ? toast.success(response.success.message)
      : toast.error(response.error.message);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-[90%] flex flex-col justify-between mx-auto gap-2 "
      >
        <Input
          register={register}
          id="current_password"
          type="password"
          label="Current password"
          placeholder=""
        />
        <Input
          register={register}
          id="new_password"
          type="password"
          label="New Password"
          placeholder=""
        />

        <Input
          register={register}
          label="Confirm New password"
          id="confirm_password"
          placeholder=""
          type="password"
        />
        <div className=" w-[90%] mx-auto mt-4">
          <button
            className="bg-[#091F8E] rounded-md text-white py-2 px-4"
            disabled={isSubmitting}
          >
            update User
          </button>
        </div>
      </form>
    </section>
  );
};

export default Password;
