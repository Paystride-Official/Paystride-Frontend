import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Provider/Nextui/NextProvider";
import { QueryProvider } from "@/react-query/QueryProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayoutClient from "./RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paystride",
  description:
    "Paystride helpts in Effortlessly Accepting and Confirming Large Scale Transfers! Empower your store sales rep(s) to instantly confirm transfer payments - no calls needed, no customer delays.",
manifest:"/web.manifest",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <QueryProvider>
          <Providers><RootLayoutClient>{children}</RootLayoutClient> </Providers>
          <ToastContainer position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
