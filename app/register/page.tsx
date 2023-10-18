"use client";
import Input from "@/components/Input/Input";
import Image from "next/image";
import React, { useState } from "react";
import Paystride from "../assets/Paystride.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Stepper from "@/components/Stepper/Stepper";
import LoginForm from "@/components/LoginForm/LoginForm";
import VerifyUserForm from "@/components/VerifyUserForm/VerifyUserForm";

interface Props {}

const page = (props: Props) => {
  const [step, setStep] = useState<number>(2);

  const StepToRender = (key: number) => {
    switch (key) {
      case 1:
        return <LoginForm setStep={setStep} step={step} />;

      case 2:
        return <VerifyUserForm setStep={setStep} step={step} />;

      default:
        break;
    }
  };

  const handleClick = () => {};

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mt-8 bg-red">
        <Stepper step={step} />
        {StepToRender(step)}
      </div>
    </section>
  );
};

export default page;
