"use client";
import { ResetPasswordSchema } from "@/Utils/Schemas";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { useResetPassword } from "./_slice/query";
type Props = {};

const ResetPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const router = useRouter();

  const { mutateAsync: resetPassword } = useResetPassword();

  const handleClick = async (data: FieldValues) => {
    const updatedData = { ...data, email: "ozoremenachiima@gmail.com" };
    const response = await resetPassword(updatedData);

    if (response.success) {
      // console.log(response.success);

      return;
    } else {
      // console.log(response.error);
    }

    // router.push("/otp");
  };

  return (
    <section className="h-fit mt-12 flex flex-col items-center justify-center">
      <div className="py-8 sm:w-[350px] md:w-[500px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px] mx-4">
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">Reset Password</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleClick)}
          className="w-[90%] flex flex-col gap-4 mx-auto"
        >
          <Input
            register={register}
            id="new_password"
            type="password"
            label="New password"
            placeholder=""
          />

          <Input
            register={register}
            id="confirm_password"
            type="password"
            label="Confirm your password"
            placeholder=""
          />
          {(errors.new_password || errors.confirm_password) && (
            <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
              {errors.new_password
                ? `${errors.new_password?.message} `
                : `${errors.confirm_password?.message}`}
            </p>
          )}
          <Button type="submit" text="reset password" disabled={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
