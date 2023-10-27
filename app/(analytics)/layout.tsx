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
    <html lang="en">
      <body>
        <main className="w-full flex">
          <Sidebar />
          <div className="flex flex-col flex-[7]">
            <Navbar />
            <div className=" bg-[#FAFAFA] h-screen ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
