import Image from "next/image";
import React from "react";
import StarIcon from "@/app/(marketing)/assets/VectorStar.svg";

type SlideProps = {
    id: number;
    image: any;
    text: string;
    name: string;
    surname: string;
    position: string;
    companyName: string;
    companyLogo: any;
};

const Carousel = ({
    image,
    text,
    name,
    surname,
    position,
    companyName,
    companyLogo,
}: SlideProps) => {
    return (
        <>
            <div className="bg-red-600">
                <h1 className="w-full">
                    Carousel fdhb nmfgbvksh mjh agkvhwne udhpsxijef[opewmf
                    ;oirqo]
                </h1>
                {/* <div className="bg-green-400 w-full flex flex-col md:flex-row items-center gap-4 h-25">
                    <div className=" flex-[1] relative w-full bg-yellow-300">
                        <Image
                            src={image}
                            alt="SliderImage"
                            priority
                            className="w-full md:w-[85%] rounded-2xl md:rounded-none"
                        />
                    </div>
                    <div className="flex-[1] flex items-center order-2 md:order-1 py-4 md:py-0">
                        <div>
                            <div className="flex gap-1">
                                <Image src={StarIcon} alt="StarIcon" />
                                <Image src={StarIcon} alt="StarIcon" />
                                <Image src={StarIcon} alt="StarIcon" />
                                <Image src={StarIcon} alt="StarIcon" />
                                <Image src={StarIcon} alt="StarIcon" />
                            </div>
                            <p className="font-bold py-3 lg:py-5 bg-blue-600 max-w-[50rem] mt-3 lg:mt-6 mx-auto  text-sm md:text-base lg:text-xl text-start">
                                "{text}"
                            </p>
                            <div className="bg-red-600 flex capitalize my-2 md:my-3">
                                <div className="bg-purple-500 pr-3 text-[12px] md:text-base border-r-2 border-zinc-950">
                                    <h3 className="font-semibold">
                                        {name} {surname}
                                    </h3>
                                    <p>
                                        {position}, {companyName}
                                    </p>
                                </div>
                                <Image
                                    src={companyLogo}
                                    alt="Logo"
                                    className="w-20 sm:w-24 md:w-auto pl-2"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Carousel;
