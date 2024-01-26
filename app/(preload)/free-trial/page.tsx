"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import Sidebar from "../_components/Sidebar/Sidebar";
import PaymentLink from "../payment-link/page";
import ModalPopUp from "@/components/Modal/Modal";

type Props = {};

const FreeTrial = ({}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>("");

    const { register, handleSubmit, getValues, reset } = useForm();

    const handleOnSubmit = (data: FieldValues) => {
        setIsOpen(true);
        const formData = getValues();
        console.log(formData);

        reset();
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const determineContent = () => {
            if (isOpen) {
                return <PaymentLink />;
            }
            // Return a default or null if neither condition is met
            return null;
        };

        setContent(determineContent());
    }, [isOpen]);

    return (
        <div>
            <section className="w-full h-[100vh]">
                <Sidebar />
                <div className="md:w-[75%] md:ml-[25%] flex items-center justify-center h-full">
                    <div className="w-[90%] md:w-[80%] lg:w-[75%]">
                        <div className=" text-[#7F7F7F]">
                            <h2 className="text-[4.99vw] min-[500px]:text-2xl lg:text-[32px] font-bold w-fit">
                                Start accepting payments in 3 minutes
                            </h2>
                            <p className="text-xs sm:text-sm mb-10 w-fit">
                                Get Started
                            </p>

                            <form
                                onSubmit={handleSubmit(handleOnSubmit)}
                                className="text-base lg:text-[20px]"
                            >
                                <input
                                    type="text"
                                    placeholder="Business name"
                                    required
                                    {...register("businessName")}
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />
                                <input
                                    type="tel"
                                    placeholder="Bank account"
                                    maxLength={10}
                                    required
                                    {...register("bankAccount")}
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Bank name"
                                    required
                                    {...register("bankName")}
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    maxLength={15}
                                    required
                                    {...register("phoneNumber")}
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    required
                                    {...register("email")}
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />

                                <label
                                    htmlFor="points"
                                    className="text-sm lg:text-base mr-5 sm:mr-7"
                                >
                                    How many payment points do you have?
                                </label>
                                <input
                                    type="tel"
                                    id="points"
                                    maxLength={1}
                                    required
                                    {...register("points")}
                                    className="w-12 sm:w-20 pl-2 sm:pl-4 py-1 sm:py-2 mb-3 border border-[#051355] rounded"
                                />

                                <br />
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-auto rounded mr-3"
                                        id="check"
                                        required
                                    />
                                    <label
                                        htmlFor="check"
                                        className="text-xs sm:text-sm lg:text-base m-0"
                                    >
                                        By checking you have accepted our{" "}
                                        <span className="text-[#091F8E]">
                                            <Link href="">
                                                Terms & Conditions
                                            </Link>
                                        </span>{" "}
                                        and{" "}
                                        <span className="text-[#091F8E]">
                                            <Link href="">Policies</Link>
                                        </span>
                                    </label>
                                </div>

                                <br />

                                <button
                                    type="submit"
                                    className="bg-[#091F8E] text-sm sm:text-base text-white px-12 py-3 rounded my-7 mx-auto sm:mx-0 block"
                                >
                                    Generate payment link
                                </button>

                                <hr />
                            </form>
                            <div>
                                <ModalPopUp
                                    isOpen={isOpen}
                                    closeModal={closeModal}
                                    body={content}
                                    size="3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeTrial;
