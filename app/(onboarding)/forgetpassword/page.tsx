"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/reset-password");
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="py-8 md:w-[500px] lg:w-[620px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">Forgot Password</h1>
        </div>
        <form action="" className="w-[90%] flex flex-col gap-4 mx-auto">
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder=""
            required
          />

          <div className="w-[90%] flex mx-auto justify-end">
            <Link href="/login" className="capitalize text-[#091F8E] ">
              Login
            </Link>
          </div>
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

export default Page;
