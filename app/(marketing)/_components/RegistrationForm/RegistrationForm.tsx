"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldValues } from "react-hook-form";
import Link from "next/link";
import Paystride from "@/app/assets/Paystride.svg";
import Image from "next/image";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useCreateUserAccount } from "../../(auth)/register/_slice/query";
import { SignUpSchema } from "@/Utils/Schemas";
import EyeOpen from "@/app/(marketing)/assets/EyeOpen.svg";
import EyeClose from "@/app/(marketing)/assets/EyeClose.svg";

type Props = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setUserData: React.Dispatch<React.SetStateAction<FieldValues>>;
    onSubmit: () => void;
};

const RegistrationForm = ({ setStep, step, setUserData, onSubmit }: Props) => {
    const [registerSuccessResponse, setRegisterSuccessRonse] =
        useState<any>(null);
    const [registerErrorResponse, setRegisterErrorRonse] = useState<any>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowPasswordConfirmation = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FieldValues>({
        resolver: zodResolver(SignUpSchema),
    });

    const { mutateAsync: createUserAccount } = useCreateUserAccount();

    const handleOnSubmit = async (data: FieldValues) => {
        const formData = getValues();
        setUserData(formData);
        const response: any = await createUserAccount(formData);
        if (response.success) {
            setRegisterSuccessRonse(response.success);
            setStep(step + 1);
            reset();
        } else {
            setRegisterErrorRonse(response.error);
        }
    };

    return (
        <section>
            <div className="py-8 mb-4 sm:w-[350px] md:w-[500px] flex  flex-col items-center justify-center bg-[#F3F3F3] rounded-[15px] mx-4">
                <div className="mb-4 ">
                    <Image
                        src={Paystride}
                        alt="Paystride"
                        className="mx-auto"
                    />
                    <p>Let&apos;s get you started</p>
                </div>
                <form
                    onSubmit={handleSubmit(handleOnSubmit)}
                    className="w-[90%] flex flex-col gap-4 mx-auto"
                >
                    <Input
                        register={register}
                        label="Business Name"
                        id="business_name"
                        placeholder=""
                        type="text"
                    />
                    {errors.business_name && (
                        <p className="text-red-500 w-[90%] mx-auto mt-[-1rem]">
                            {`${errors.business_name.message}`}
                        </p>
                    )}

                    <Input
                        register={register}
                        label=" Name"
                        id="name"
                        placeholder=""
                        type="text"
                    />
                    {errors.name && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
                            {`${errors.name.message}`}
                        </p>
                    )}

                    <Input
                        register={register}
                        id="email"
                        type="email"
                        label="Email"
                        placeholder=""
                    />
                    {errors.email && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
                            {`${errors.email.message}`}
                        </p>
                    )}

                    <Input
                        register={register}
                        label="Phone Number"
                        id="phone_number"
                        placeholder=""
                        type="text"
                    />
                    {errors.phone_number && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
                            {`${errors.phone_number.message}`}
                        </p>
                    )}
                    <div className="relative">
                        <Input
                            register={register}
                            label="Password"
                            id="password"
                            placeholder="Enter at least 8 characters"
                            type={showPassword ? "text" : "password"}
                        />
                        <Image
                            onClick={handleShowPassword}
                            src={showPassword ? EyeOpen : EyeClose}
                            alt="Show password"
                            className="w-4 md:w-auto absolute bottom-[10px] right-[5%] mr-[15px] cursor-pointer"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
                            {`${errors.password.message}`}
                        </p>
                    )}

                    <div className="relative">
                        <Input
                            register={register}
                            label="Password Confirmation"
                            id="password_confirmation"
                            placeholder=""
                            type={
                                showPasswordConfirmation ? "text" : "password"
                            }
                        />
                        <Image
                            onClick={handleShowPasswordConfirmation}
                            src={showPasswordConfirmation ? EyeOpen : EyeClose}
                            alt="Show password"
                            className="w-4 md:w-auto absolute bottom-[10px] right-[5%] mr-[15px] cursor-pointer"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem]">
                            {`${errors.password.message}`}
                        </p>
                    )}

                    <Input
                        register={register}
                        label="How did you hear about us? (optional)"
                        id="aboutUs"
                        placeholder=""
                        type="text"
                    />
                    <div className="w-[90%] flex mx-auto">
                        <input
                            type="checkbox"
                            id="t_and_c"
                            {...register("t_and_c")}
                            className="flex items-center mr-[0.3rem]"
                        />
                        <p className="text-[9px] md:text-[12px]">
                            By checking you have accepted our
                            <span className="text-[#091F8E] underline px-1">
                                Terms & conditions
                            </span>
                            and{" "}
                            <span className="text-[#091F8E] underline ">
                                policies
                            </span>
                        </p>
                    </div>
                    {errors.t_and_c && (
                        <p className="text-red-500 w-[90%] mx-auto my-0 mt-[-1rem] ">
                            {`${errors.t_and_c.message}`}
                        </p>
                    )}

                    <Button
                        type="submit"
                        text="continue"
                        disabled={isSubmitting}
                    />
                </form>

                <p>
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-[#091F8E] underline capitalize"
                    >
                        sign in
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default RegistrationForm;
