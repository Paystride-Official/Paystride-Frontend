import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlusSign from "@/app/(marketing)/assets/Plus.svg";

type FaqProps = {
  question: string;
  answer: string;
  id: number;
};

const AccordionItem = ({ question, answer }: FaqProps) => {
  const [show, setShow] = useState(false);
  const [divHeight, setDivHeight] = useState("0px");
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answerRef.current) {
      setDivHeight(`${answerRef.current.scrollHeight}px`);
    }
  });

  return (
    <>
      <div className="w-[full] mb-3 border-2 border-[#6A8F9F] text-[12px] md:text-base">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="bg-[#6A8F9F] font-medium border-none text-start px-4 py-2 w-full flex justify-between"
        >
          {question}
          <span
            style={{
              transform: `rotate(${show ? "45deg" : "0deg"})`,
            }}
            className="w-[5%]"
          >
            <Image src={PlusSign} alt="PlusSign" />
          </span>
        </button>
        <div
          style={{ height: show ? `${divHeight}` : "0px" }}
          ref={answerRef}
          className="overflow-hidden bg-white text-[#6A8F9F] transition-[300ms] ease-in-out"
        >
          <p className="px-4 py-2">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
