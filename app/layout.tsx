import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Provider/Nextui/NextProvider";
import { QueryProvider } from "@/react-query/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="w-full h-full">
        <QueryProvider>
          <Providers>{children}</Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
