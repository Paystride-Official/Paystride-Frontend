import type { Metadata } from "next";
import Navbar from "./_components/Navbar/Navbar";

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
      <Navbar />
      <div className="grid place-items-center">{children}</div>
    </section>
  );
}
