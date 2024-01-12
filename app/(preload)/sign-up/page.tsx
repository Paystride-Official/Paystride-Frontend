"use client";
import ModalPopUp from "@/components/Modal/Modal";
import React, { useEffect, useState, ReactNode } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import Sidebar from "../_components/Sidebar/Sidebar";
import PayLink from "../_components/PayLink/PayLink";

type Props = {};

const SignUpLite = ({}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [addNewModal, setAddNewModal] = useState(false);
    const [content, setContent] = useState<ReactNode>("");
    const [bankAccount, setBankAccount] = useState("");
    const [bankName, setBankName] = useState("");
    const [point, setPoint] = useState("");

    const { register, handleSubmit, getValues, reset } = useForm();

    const handleBankAccChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBankAccount(e.target.value);
    };

    const handleBankNamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBankName(e.target.value);
    };

    const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPoint(e.target.value);
    };

    const handleOnSubmit = (data: FieldValues) => {
        setAddNewModal(!addNewModal);
        const formData = getValues();
        console.log(formData);

        reset();
    };

    const closeModal = () => {
        setAddNewModal(false);
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        const determineContent = () => {
            if (addNewModal) {
                return (
                    <PayLink
                        bankAccount={bankAccount}
                        bankName={bankName}
                        points={point}
                        link="neihnksojuadhxbnakhxiuilddxd_jhdjbsdgh"
                    />
                );
            }
            // Return a default or null if neither condition is met
            return null;
        };

        setContent(determineContent());
    }, [isOpen, addNewModal]);

    return (
        <div>
            <section className="w-full h-[100vh]">
                <Sidebar />
                <div className="md:w-[75%] md:ml-[25%] flex items-center justify-center h-full">
                    <div className="w-[90%] md:w-[80%] lg:w-[75%]">
                        <div className=" text-[#7F7F7F]">
                            <h2 className="min-[361px]:text-lg min-[401px]:text-xl sm:text-2xl lg:text-[32px] font-bold w-fit">
                                Start accepting payments in 3 minutes
                            </h2>
                            <p className="text-xs sm:text-sm mb-10 w-fit">
                                Get Started
                            </p>

                            <form
                                //onChange={(e) => setDetails(e.target.value)}
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
                                    onChange={handleBankAccChange}
                                    type="tel"
                                    placeholder="Bank account"
                                    name="bankAccount"
                                    maxLength={10}
                                    required
                                    className="w-full px-3 sm:px-5 py-2 mb-3 border border-[#051355] rounded"
                                />
                                <input
                                    onChange={handleBankNamChange}
                                    type="text"
                                    name="bankName"
                                    placeholder="Bank name"
                                    required
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
                                    onChange={handlePointChange}
                                    type="tel"
                                    name="points"
                                    id="points"
                                    maxLength={1}
                                    required
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
                                    isOpen={isOpen || addNewModal}
                                    closeModal={closeModal}
                                    body={content}
                                    size="3xl"
                                    paddingX={{
                                        paddingInline: "2.5%",
                                        paddingBottom: "25px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUpLite;
