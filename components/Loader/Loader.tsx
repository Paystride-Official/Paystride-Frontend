import React from "react";
import "./Loader.css"; // Import your custom CSS file
import Image from "next/image";
import Paystride from "@/app/assets/Paystride.svg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="logo-loader animate-bounce">
        <Image src={Paystride} alt="paystride" width={30} height={30} />
      </div>
    </div>
  );
};

export default Loader;
