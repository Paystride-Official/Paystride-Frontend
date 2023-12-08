"use client";
import React, { useState, useCallback } from "react";
import Stepper from "@/components/Stepper/Stepper";
import VerifyUserForm from "../../_components/VerifyUserForm/VerifyUserForm";
import RegistrationForm from "../../_components/RegistrationForm/RegistrationForm";
import { signUpUser } from "@/types/types";
import { FieldValues } from "react-hook-form";
import { useCreateUserAccount } from "./_slice/query";

interface Props {}

const Register = (props: Props) => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<FieldValues>();

  const handleSubmit = () => {};

  const { mutateAsync: createUserAccount } = useCreateUserAccount();

  const handleRegister = async (data: FieldValues) => {
    // setUserData(data);
    // const session: any = await useCreateUserAccount(formData);
    // // z.infer<typeof SignUpSchema>
    // console.log(session);
    // if (session.success) {
    //   setStep(step + 1);
    //   reset();
    // }
  };

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
