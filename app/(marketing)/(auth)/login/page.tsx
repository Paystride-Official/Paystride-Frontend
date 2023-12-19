"use client";
import React from "react";
import Image from "next/image";
import Paystride from "@/app/assets/Paystride.svg";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema } from "@/Utils/Schemas";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useSignInAccount } from "./_slice/query";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/AuthContext";

interface Props {}
const LoginPage = (props: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LogInSchema),
  });

  const { setUser } = useUserContext();
  const { mutateAsync: signInAccount } = useSignInAccount();

  const handleOnSubmit = async (data: FieldValues) => {
    const formData = getValues();
    const response: any = await signInAccount(formData);

    if (response.success) {
      console.log(response.success);
      console.log("to dashboard");

      // router.push("/dashboard");
      return;
    } else {
      console.log(response.error);
    }

    reset();
  };

  return (
    <section className=" h-fit mt-12 flex flex-col items-center justify-center">
      <div className="py-8 sm:w-[350px] md:w-[500px]  flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px] mx-4">
        <div className="mb-4 w-[90%] mx-auto">
          <Image src={Paystride} alt="Paystride" className="mx-auto" />
          <p className="text-center">Welcome back, enter your login details</p>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="w-[90%] flex flex-col justify-between mx-auto gap-2"
        >
          <Input
            register={register}
            id="email"
            type="email"
            label="Email"
            placeholder=""
          />

          <Input
            register={register}
            label="Password"
            id="password"
            placeholder="Enter at least 8 characters"
            type="password"
          />

          <div className="w-[90%] flex mx-auto justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privacy"
                className=" text-sm flex items-center mr-[0.3rem]"
              />
              <span className="text-sm">Remember me</span>
            </div>
            <Link
              href="/forget-password"
              className=" text-sm capitalize text-[#091F8E] "
            >
              forget password?
            </Link>
          </div>

          {errors.password && (
            <p className="text-red-500 w-[90%] mx-auto my-0 ">
              {`Invalid email/password`}
            </p>
          )}

          <Button type="submit" text="login" disabled={isSubmitting} />
        </form>

        <p>
          Are you new to Paystride?
          <Link
            href="/register"
            className="text-[#091F8E] underline capitalize px-1"
          >
            sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
