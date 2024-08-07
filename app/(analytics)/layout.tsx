import { ProtectedRoute } from "@/ProtectedRoute/ProtectedRoute";
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
      <ProtectedRoute>
        <main className="w-full flex">
          <Sidebar display={"hidden"} displaymd={"block"} />
          <div className="flex flex-col flex-[7]">
            <Navbar />
            <div className=" w-full bg-[#FAFAFA] min-h-[100vh] px-4 py-6 pb-24  ">
              {children}
            </div>
          </div>
        </main>
      </ProtectedRoute>
    </section>
  );
}
