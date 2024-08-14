"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";

import Sidebar from "../_components/Sidebar/Sidebar";
import ModalPopUp from "@/components/Modal/Modal";
import CbnModal from "../_components/CbnModal/CbnModal";
import { useCreateVirtualAccout } from "./_slice/query";
import { useRouter } from "next/navigation";
import PaymentLink from "../_components/PaymentLink";
import { generateLink } from "@/Utils/constants";
import { toast } from "react-toastify";

type PaymentLink =
  | {
      token: string;
      virtual_account: {
        id: string;
        payment_point_id: string;
        merchant_id: string;
        status: boolean;
        name: string;
        account_number: string;
        business_name: string;
        bank_name: string;
        paymentLink: string;
      };
    }[]
  | null;

const FreeTrial = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>("");
  const [showCbnPolicy, setShowCbnPolicy] = useState(false);
  const [paymentLink, setPaymentLink] = useState<PaymentLink | null>(null);

  const { register, handleSubmit, getValues, reset } = useForm();
  const { mutateAsync: createVirtualAccount, isLoading } =
    useCreateVirtualAccout();

  const handleOnSubmit = async (data: FieldValues) => {
    const formData = getValues();
    const { amount, ...rest } = formData;

    const response = await createVirtualAccount({
      // bank_account: Number(bank_account),
      // bvn: Number(bvn),
      amount: Number(amount),
      // t_and_c: t_and_c === true ? 1 : 0,
      ...rest,
    });

    if (response.success) {
      setPaymentLink(response.success.data.payment_points || []);
      console.log(response.success);
      setIsOpen(true);
      reset();
    } else {
      toast.error(response.error?.response.message);
      console.log(response.error);
      return;
      // setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const determineContent = () => {
      if (isOpen) {
        return <PaymentLink generatedLinks={paymentLink} />;
      }
      // Return a default or null if neither condition is met
      return null;
    };

    setContent(determineContent());
  }, [isOpen]);

  return (
    <div>
      <section className="w-full">
        <Sidebar />
        <div className="md:w-[75%] md:ml-[25%] flex items-center justify-center h-full">
          <div className="w-[90%] md:w-[80%] lg:w-[75%] my-4">
            <div className="text-[#7F7F7F] pb-5">
              <h2 className="text-[4.99vw] min-[500px]:text-2xl lg:text-[32px] font-bold w-fit mt-8">
                Start accepting payments in 3 minutes
              </h2>

              <p className="text-xs sm:text-sm mb-10 w-fit pt-1">Get Started</p>

              <form
                onSubmit={handleSubmit(handleOnSubmit)}
                className="text-base lg:text-[20px]"
              >
                <input
                  type="text"
                  placeholder="Business Name"
                  id="business_name"
                  required
                  {...register("business_name")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />
                <input
                  type="number"
                  placeholder="Bank Account "
                  id="bank_account"
                  maxLength={10}
                  required
                  {...register("bank_account")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />

                <input
                  type="text"
                  placeholder="Bank Name"
                  id="bank_name"
                  required
                  {...register("bank_name")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />
                <input
                  type="text"
                  placeholder="Bank code"
                  id="bank_code"
                  required
                  {...register("bank_code")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />
                <div className="mb-3 relative">
                  <input
                    type="number"
                    placeholder="BVN"
                    id="bvn"
                    maxLength={11}
                    required
                    {...register("bvn")}
                    className="w-full px-3 sm:px-5 py-2  border-[1.5px] border-[#091F8E] rounded"
                  />
                  <p
                    onMouseEnter={() => setShowCbnPolicy(true)}
                    onClick={() => setShowCbnPolicy(!showCbnPolicy)}
                    className="absolute text-xs lg:text-sm top-3 right-3 sm:right-5 underline cursor-pointer"
                  >
                    (Read CBN policy here)
                  </p>
                  <div className="absolute bottom-6 right-[25%]">
                    {showCbnPolicy && <CbnModal />}
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="phone_number"
                  maxLength={15}
                  required
                  {...register("phone_number")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  {...register("email")}
                  className="w-full px-3 sm:px-5 py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />

                <label
                  htmlFor="points"
                  className="text-sm lg:text-base mr-5 sm:mr-7"
                >
                  How many payment points do you have?
                </label>
                <input
                  type="number"
                  id="amount"
                  min={1}
                  max={20}
                  required
                  {...register("amount")}
                  className="w-12 sm:w-20 pl-2 sm:pl-4 py-1 sm:py-2 mb-3 border-[1.5px] border-[#091F8E] rounded"
                />

                <br />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-auto rounded mr-3"
                    id="t_and_c"
                    required
                    {...register("t_and_c")}
                  />
                  <label
                    htmlFor="check"
                    className="text-xs sm:text-sm lg:text-base m-0"
                  >
                    By checking you have accepted our{" "}
                    <span className="text-[#091F8E]">
                      <Link href="">Terms & Conditions</Link>
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
                  className="bg-[#091F8E] text-sm sm:text-base text-white px-12 py-3 rounded mt-8 mb-7 mx-auto sm:mx-0 block"
                >
                  {isLoading ? "Loading..." : "Generate payment link"}
                </button>

                <hr />
              </form>
              <div>
                {/* {isOpen && <PaymentLink />} */}
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
