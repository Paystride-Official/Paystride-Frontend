import type {Metadata} from "next";
import Stepper from "@/components/Stepper/Stepper";
import React from "react";
import {Router} from "next/router";

export const metadata: Metadata = {
    title: "Paystride Verify OTP",
    description: "Fill in the OTP sent to your mailbox",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
        <section className="h-screen">
            <div className="flex flex-col items-center justify-center pt-8 bg-red">
                <Stepper />
                <div className="form--holder">
                        {children}
                </div>
            </div>
        </section>
        </>
    );
}
