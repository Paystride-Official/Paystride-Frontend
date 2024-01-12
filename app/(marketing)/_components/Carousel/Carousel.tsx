"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import StarIcon from "@/app/(marketing)/assets/VectorStar.svg";
import PrevButton from "@/app/(marketing)/assets/ButtonPrev.svg";
import NextButton from "@/app/(marketing)/assets/ButtonNext.svg";

type SlideProps = {
    image: StaticImageData;
    text: string;
    name: string;
    surname: string;
    position: string;
    companyName: string;
    companyLogo: StaticImageData;
};

const Carousel = ({ slides }: { slides: SlideProps[] }) => {
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming: number = 5000;

    function showNext() {
        setActive((index) => {
            if (index === slides.length - 1) return 0;
            return index + 1;
        });
        setAutorotate(false);
    }

    function showPrev() {
        setActive((index) => {
            if (index === 0) return slides.length - 1;
            return index - 1;
        });
        setAutorotate(false);
    }

    useEffect(() => {
        if (!autorotate) return;
        const interval = setInterval(() => {
            setActive(
                active + 1 === slides.length ? 0 : (active) => active + 1
            );
        }, autorotateTiming);
        return () => clearInterval(interval);
    }, [active, autorotate]);

    return (
        <div className="h-auto relative">
            <div className="w-full flex flex-col md:flex-row items-center gap-4 h-25 md:py-5">
                <div className=" flex-[1] relative w-full">
                    {slides.map((slide, index) => (
                        <Transition
                            key={index}
                            show={active === index}
                            className="inset-0 h-full z-20"
                            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-3000 order-first"
                            enterFrom="opacity-0 -rotate-[5deg]"
                            enterTo="opacity-100 rotate-0"
                            leaveFrom="opacity-100 rotate-0"
                            leaveTo="opacity-0 rotate-[5deg]"
                        >
                            <Image
                                src={slide.image}
                                alt="SliderImage"
                                priority
                                className="w-full md:w-[85%] h-auto rounded-2xl md:rounded-none"
                            />
                        </Transition>
                    ))}
                </div>
                <div className="flex-[1] flex items-center order-2 md:order-1 py-4 md:py-0">
                    <div>
                        <div className="flex gap-1">
                            <Image
                                src={StarIcon}
                                alt="StarIcon"
                                className="w-4 md:w-auto"
                            />
                            <Image
                                src={StarIcon}
                                alt="StarIcon"
                                className="w-4 md:w-auto"
                            />
                            <Image
                                src={StarIcon}
                                alt="StarIcon"
                                className="w-4 md:w-auto"
                            />
                            <Image
                                src={StarIcon}
                                alt="StarIcon"
                                className="w-4 md:w-auto"
                            />
                            <Image
                                src={StarIcon}
                                alt="StarIcon"
                                className="w-4 md:w-auto"
                            />
                        </div>

                        {slides.map((slide, index) => (
                            <Transition
                                key={index}
                                show={active === index}
                                enter="transition ease-in-out duration-3500 delay-200 order-first"
                                enterFrom="opacity-0 -translate-x-4"
                                enterTo="opacity-100 translate-x-0"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-4"
                            >
                                <p className="font-bold py-3 lg:py-5 max-w-[50rem] sm:mt-3 lg:mt-6 mx-auto  text-sm md:text-base lg:text-xl text-start">
                                    "{slide.text}"
                                </p>
                            </Transition>
                        ))}
                        {slides.map((slide, index) => (
                            <Transition
                                key={index}
                                show={active === index}
                                enter="transition ease-in-out duration-3200 delay-200 order-first"
                                enterFrom="opacity-0 translate-x-4"
                                enterTo="opacity-100 -translate-x-0"
                                leaveFrom="opacity-100 translate-x-4"
                                leaveTo="opacity-0 translate-x-0"
                            >
                                <div className="flex capitalize mt-3 mb-2 md:my-3">
                                    <div className="pr-3 text-[12px] md:text-base border-r-2 border-zinc-950">
                                        <h3 className="font-semibold">
                                            {slide.name} {slide.surname}
                                        </h3>
                                        <p>
                                            {slide.position},{" "}
                                            {slide.companyName}
                                        </p>
                                    </div>

                                    <Image
                                        src={slide.companyLogo}
                                        alt="Logo"
                                        className="w-20 sm:w-24 md:w-auto pl-2 h-auto"
                                    />
                                </div>
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between py-3 md:py-6">
                <div className="flex gap-[6px] md:gap-3">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                                active === index ? "bg-black" : "bg-[#D0D0DF]"
                            }`}
                            onClick={() => {
                                setActive(index);
                                setAutorotate(false);
                            }}
                        ></button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button>
                        <Image
                            src={PrevButton}
                            alt="PrevButton"
                            className="w-6 md:w-auto cursor-pointer"
                            onClick={showPrev}
                        />
                    </button>
                    <button>
                        <Image
                            src={NextButton}
                            alt="NextButton"
                            className="w-6 md:w-auto cursor-pointer"
                            onClick={showNext}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
