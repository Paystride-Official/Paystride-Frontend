"use client";
import React from "react";
import Logout from "@/components/Navbar/assets/Logout.svg";
import Notification from "@/components/Navbar/assets/Notification.svg";
import Image from "next/image";
import { useSignOutAccount } from "@/app/(marketing)/(auth)/login/_slice/query";
import { removeItemFromStorage } from "@/Utils/localStorage";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const { mutateAsync: signOutAccount } = useSignOutAccount();
  const handleLogout = async () => {
    const response = await signOutAccount();
    response.success
      ? router.push("/login")
      : toast.error(response.error.message);
  };

  return (
    <section className=" h-[3.5rem]  flex justify-end sticky top-0 bg-white shadow-sm z-10">
      <div className="flex gap-4 px-4 mr-4">
        <Image
          src={Notification}
          alt="Notification"
          className="bg-[#ECECEC] w-[50px] h-[40px]  my-2  rounded-[5px] p-2"
        />
        <Image
          onClick={handleLogout}
          src={Logout}
          alt="Logout"
          className="bg-[#ECECEC] w-[50px] h-[40px] my-2 rounded-[5px] p-2 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Navbar;
