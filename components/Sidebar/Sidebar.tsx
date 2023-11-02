"use client";
import Image from "next/image";
import Dashboard from "@/components/Sidebar/assets/Dashboard.svg";
import Transaction from "@/components/Sidebar/assets/Transaction.svg";
import Paymentpoint from "@/components/Sidebar/assets/Paymentpoint.svg";
import Settlement from "@/components/Sidebar/assets/Settlement.svg";
import Settings from "@/components/Sidebar/assets/Settings.svg";
import Paystride from "@/app/assets/Paystride.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

type Props = {};
export type SidebarProps = {
  title: string;
  href: string;
  icon: string;
};

const Sidebar = (props: Props) => {
  const sideBarItems: SidebarProps[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Dashboard,
    },
    {
      title: "Transactions",
      href: "/transaction",
      icon: Transaction,
    },
    {
      title: "Payment Point",
      href: "/payment-point",
      icon: Paymentpoint,
    },
    {
      title: "Settlement",
      href: "/settlement",
      icon: Settlement,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div className=" min-h-screen sticky hidden sm:flex  bg-[#ECECEC]  ">
      <div className="h-screen sticky top-0 left-0 w-64 ">
        <div className="flex pl-12 h-[3.5rem]  items-center  bg-white">
          <Image src={Paystride} alt="Paystride" className="h-[2.5rem]" />
          <h1 className="ml-3 text-lg font-bold text-[#6A8F9F] flex items-center justify-center">
            Paystride
          </h1>
        </div>

        <div className="flex item-center justify-center  overflow-hidden bg-[#ECECEC]">
          <div className="flex flex-col mt-4">
            {sideBarItems.map((item, index) => {
              return <SidebarItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ item }: { item: SidebarProps }) => {
  const currentRoute = usePathname();

  return (
    <button
      className={` 
      } flex items-center cursor-pointer text-[#8A92A6] bg-white my-3  py-3  px-10 rounded-[10px] hover:bg-[#091f8e] hover:text-white`}
    >
      <Link href={item.href} className="flex gap-2">
        <Image src={item.icon} alt={item.title} className="" />
        <span className="flex-1 text-base font-medium">{item.title}</span>
      </Link>
    </button>
  );
};
export default Sidebar;
