import type { Metadata } from "next";
import Navbar from "./_components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Paystride",
  description:
    "Paystride Empower's your store sales rep(s) to instantly confirm transfer payments - no calls needed, no customer delays.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="grid place-items-center ">{children}</div>
    </section>
  );
}
