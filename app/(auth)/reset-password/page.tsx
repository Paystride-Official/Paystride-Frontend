"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
type Props = {};

const ResetPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({});
  const router = useRouter();

  const handleClick = () => {
    router.push("/otp");
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="py-8 md:w-[500px]  flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">Forgot Password</h1>
        </div>
        <form action="" className="w-[90%] flex flex-col gap-4 mx-auto">
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
          <Button
            type="button"
            text="reset password"
            handleClick={handleClick}
          />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
