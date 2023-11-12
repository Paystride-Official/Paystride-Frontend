"use client";
import Input from "@/components/Input/Input";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import Paystride from "../assets/Paystride.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Stepper from "@/components/Stepper/Stepper";
import VerifyUserForm from "@/components/VerifyUserForm/VerifyUserForm";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";

interface Props {}

const Register = (props: Props) => {
  const [step, setStep] = useState<number>(1);

  const StepToRender = useCallback(
    (key: number): React.JSX.Element | null => {
      let step = key;
      switch (step) {
        case 1:
          return <RegistrationForm setStep={setStep} step={step} />;
        case 2:
          return <VerifyUserForm setStep={setStep} step={step} />;
        default:
          return null;
      }
    },
    [step] // Provide 'key' as a dependency
  );

  const handleClick = () => {};

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <Stepper step={step} />
        {StepToRender(step)}
      </div>
    </section>
  );
};

export default Register;
