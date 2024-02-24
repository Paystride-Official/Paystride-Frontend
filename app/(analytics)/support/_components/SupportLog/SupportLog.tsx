"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowDown from "@/app/(analytics)/support/assets/ArrowDown.svg";

type ColorProps = {
  color: string;
};

const SupportLog = () => {
  const [show, setShow] = useState(false);
  const [divHeight, setDivHeight] = useState("0px");
  const answerRef = useRef<HTMLDivElement>(null);

  const Log = [
    { topic: "payment point", color: "#1b942d" },
    { topic: "transaction", color: "#ffa135" },
    { topic: "other", color: "#1b942d" },
  ];

  useEffect(() => {
    if (answerRef.current) {
      setDivHeight(`${answerRef.current.scrollHeight}px`);
    }
  });

  return (
    <>
      <div className="w-[full] bg-white rounded-md border-[2.066px] border-solid border-[#ECEEF6]">
        <div className="w-full flex justify-between items-center bg-[#a1b1f8] rounded-b-lg rounded-t px-5 pt-3 pb-4">
          <p className="font-semibold text-base sm:text-lg">Support Log</p>
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="cursor-pointer mr-4 p-1"
          >
            <Image
              src={ArrowDown}
              alt="ArrowDown"
              className="w-3 sm:w-auto"
              style={{
                transform: `rotate(${show ? "180deg" : "0deg"})`,
              }}
            />
          </span>
        </div>
        <div
          style={{ height: show ? `${divHeight}` : "0px" }}
          ref={answerRef}
          className="overflow-hidden bg-white transition-[300ms] ease-in-out px-5"
        >
          <div className="flex flex-col h-[85vh] text-sm sm:text-base">
            <div className="flex justify-between font-semibold py-3">
              <p>Topic</p>
              <p className="mr-2">Status</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2 pt-2">
              {Log.map((logs, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <p className="capitalize text-[#868683]">{logs.topic}</p>
                    <div className="px-1 mr-4 rounded-[50%] bg-[#ECECEC] flex items-center justify-center">
                      <ColorItem color={logs.color} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportLog;

const ColorItem: React.FunctionComponent<ColorProps> = ({ color }) => (
  <div
    className="w-3 sm:w-4 h-3 sm:h-4 rounded-[50%]"
    style={{ backgroundColor: color }}
  ></div>
);
