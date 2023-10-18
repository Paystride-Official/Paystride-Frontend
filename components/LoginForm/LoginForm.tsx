import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Link from "next/link";
import Paystride from "../../app/assets/Paystride.svg";
import Image from "next/image";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const LoginForm = ({ setStep, step }: Props) => {
  const handleClick = () => {
    setStep(step + 1);
  };

  return (
    <section>
      <div className="py-8 md:w-[500px] lg:w-[620px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px]">
        <div className="mb-4 ">
          <Image src={Paystride} alt="Paystride" className="mx-auto" />
          <p>Let&apos;s get you started</p>
        </div>
        <form action="" className="w-[90%] flex flex-col gap-4 mx-auto">
          <Input
            label="Business Name"
            id="businessName"
            placeholder=""
            type="text"
            required
          />

          <Input label=" Name" id="name" placeholder="" type="text" />

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder=""
            required
          />

          <Input
            label="Phone Number"
            id="phoneNumber"
            placeholder=""
            type="number"
            required
          />

          <Input
            label="Password"
            id="password"
            placeholder="Enter at least 8 characters"
            type="password"
            required
          />

          <Input
            label="How did you hear about us? (optional)"
            id="aboutUs"
            placeholder=""
            type="text"
            required
          />
          <div className="w-[90%] flex mx-auto">
            <input
              type="checkbox"
              id="privacy"
              className="flex items-center mr-[0.3rem]"
            />
            <p className="text-sm">
              By checking you have accepted our
              <span className="text-[#091F8E] underline ">
                Term & conditions
              </span>
              and <span className="text-[#091F8E] underline ">policies</span>
            </p>
          </div>

          <Button type="button" text="continue" handleClick={handleClick} />
        </form>

        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-[#091F8E] underline capitalize">
            sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
