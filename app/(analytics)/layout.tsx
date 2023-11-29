import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paystride",
  description: "A seamless payment gateway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="w-full flex">
        <Sidebar />
        <div className="flex flex-col flex-[7]">
          <Navbar />
          <div className=" w-full bg-[#FAFAFA] min-h-[calc(100vh_-_3.5rem)] px-4 py-6  ">
            {children}
          </div>
        </div>
      </main>
    </section>
  );
}
