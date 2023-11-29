import Image from "next/image";
import Banner from "@/app/(marketing)/assets/image 2.svg";
import Atm from "@/app/(marketing)/assets/image 4.svg";

export default function Home() {
  return (
    <main className="w-[90%] mx-auto">
      <div className="">
        <h1 className="text-3xl md:text-5xl lg:text-7xl mt-8 font-extrabold text-center p-4 max-w-[27rem] mx-auto md:max-w-[40rem]  lg:max-w-[48rem] ">
          Mobile checkout No More Waiting
        </h1>

        <p className="mt-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="flex mt-6 mb-2 md:mt-8 gap-4 justify-center">
          <button className="text-white capitalize bg-[#091F8E] py-1 px-3 text-[12px] md:text-base lg:text-xl">
            try paystride for free
          </button>
          <button className="border border-solid border-[#21232a] py-1 px-3 md:py-2 md:px-4 text-[12px] md:text-base lg:text-lg capitalize">
            Discover in 1 minute
          </button>
        </div>

        <div className="relative w-full  max-w-[80rem] aspect-square mx-auto">
          <Image
            src={Banner}
            alt="Banner"
            fill
            priority
            className=" mt-[-2.5rem] sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-10rem] z-[-2]"
          />
        </div>
        <div className="mt-[-7rem] sm:mt-[-15rem] md:mt-[-18rem] lg:mt-[-25rem] xl:mt-[-30rem]  md:text-4xl  font-extrabold text-center p-4 max-w-[27rem] mx-auto md:max-w-[40rem]  ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Unleash the power of mobile payments in your business
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center gap-4 h-25 my-4">
          <div className="flex-[1] flex items-center order-2 md:order-1">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Receive mobile transfer notifications
                <span className="pl-4 text-[#6A8F9F]">instantly</span>
              </h1>
              <p className="mt-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="text-white capitalize bg-[#091F8E] py-1 px-3 my-2 text-[12px] md:text-base lg:text-xl">
                try paystride for free
              </button>
            </div>
          </div>
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto md:order-2">
            <Image
              src={Atm}
              alt="AtmImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center gap-6 h-25 my-4">
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto ">
            <Image
              src={Atm}
              alt="AtmImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
          <div className="flex-[1] flex items-center order-2 md:order-1">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Manage settlements with
                <span className="pl-4 text-[#6A8F9F]">ease</span>
              </h1>
              <p className="mt-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="text-white capitalize bg-[#091F8E] py-1 px-3 my-2 text-[12px] md:text-base lg:text-xl">
                try paystride for free
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center gap-4 h-25 my-4">
          <div className="flex-[1] flex items-center order-2 md:order-1">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Receive mobile transfer notifications
                <span className="pl-4 text-[#6A8F9F]">instantly</span>
              </h1>
              <p className="mt-3 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="text-white capitalize bg-[#091F8E] py-1 px-3 my-2 text-[12px] md:text-base lg:text-xl">
                try paystride for free
              </button>
            </div>
          </div>
          <div className=" flex-[1] relative w-full  max-w-[80rem] aspect-square mx-auto md:order-2">
            <Image
              src={Atm}
              alt="AtmImage"
              fill
              priority
              className="z-[-1]  lg:max-w-[500px]  mx-auto bg-white"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
