"use client";
import React, { useState, useCallback } from "react";
import Stepper from "@/components/Stepper/Stepper";
import VerifyUserForm from "../../_components/VerifyUserForm/VerifyUserForm";
import RegistrationForm from "../../_components/RegistrationForm/RegistrationForm";
import { signUpUser } from "@/types/types";
import { FieldValues } from "react-hook-form";

interface Props {}

const Register = (props: Props) => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<FieldValues>();

  const handleSubmit = () => {};

  const StepToRender = useCallback(
    (key: number): React.JSX.Element | null => {
      let step = key;
      switch (step) {
        case 1:
          return (
            <RegistrationForm
              setStep={setStep}
              step={step}
              onSubmit={handleSubmit}
              setUserData={setUserData}
            />
          );
        case 2:
          return (
            <VerifyUserForm
              setStep={setStep}
              step={step}
              onSubmit={handleSubmit}
              userData={userData}
            />
          );
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
