"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlusSign from "@/app/(marketing)/assets/Plus.svg";

type FaqProps = {
    question: string;
    answer: string;
    id: number;
    bgcolor: React.CSSProperties;
    border: React.CSSProperties;
};

const AccordionItem = ({ question, answer, bgcolor, border }: FaqProps) => {
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
            <div
                className="w-[full] mb-3 border-2 text-[12px] min-[360px]:text-sm sm:text-base"
                style={border}
            >
                <div
                    onClick={() => {
                        setShow(!show);
                    }}
                    className="font-medium border-none text-start px-3 sm:px-4 py-2 w-full flex justify-between"
                    style={bgcolor}
                >
                    <button className="text-start">{question}</button>
                    <span className="ml-1 ">
                        <Image
                            src={PlusSign}
                            alt="PlusSign"
                            className="max-w-[15px] min-[360px]:max-w-[23px] sm:min-w-[30px]"
                            style={{
                                transform: `rotate(${show ? "45deg" : "0deg"})`,
                            }}
                        />
                    </span>
                </div>
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
