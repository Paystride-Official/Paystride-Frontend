"use client";
import React, { useRef, useState, useEffect } from "react";
import PlusSign from "@/app/(marketing)/assets/Plus.svg";
import Image from "next/image";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = () => {
  const Faq = [
    {
      id: 1,
      question: "What is Paystride and how does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      question: "What types of transfers can I make using Paystride?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      question:
        "Are there any fees associated with using Paystride for money transfers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      question:
        "What are the maximum and minimum transfer limits with Paystride?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 5,
      question: "Can I send money internationally using Paystride?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <>
      <div className="w-[90%] py-0 md:py-10 flex flex-col md:flex-row">
        <div className="flex-[1] py-0 md:py-7">
          <div>
            <h1 className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl">
              FAQs
            </h1>
            <p className="mt-3 mb-4 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button className="border border-solid border-[#21232a] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base xl:text-lg capitalize">
              contact sales
            </button>
          </div>
        </div>
        <div className="flex-[1] py-7 flex justify-center">
          <div>
            {Faq.map((faqs) => {
              return <AccordionItem {...faqs} key={faqs.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;