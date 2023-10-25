"use client"

import React, { useState } from "react";
import Stepper from "@/components/Stepper/Stepper";
import RegisterForm from "@/components/LoginForm/RegisterForm";
import VerifyUserForm from "@/components/VerifyUserForm/VerifyUserForm";

interface Props {}

const Page = (props: Props) => {

  const StepToRender = (key: number) => {
        return <RegisterForm />;
  };

  const handleClick = () => {}; 

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mt-8 bg-red">
        <RegisterForm />
      </div>
    </section>
  );
};

export default Page;
