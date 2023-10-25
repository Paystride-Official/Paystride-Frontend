import type {Metadata} from "next";
import React from "react";
import {DashboardSidebar} from "@/components/Navigation/DashboardSidebar";


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
                <div>
                    <DashboardSidebar />
                    <div className="lg:pl-72">
                        <main className="py-10">
                            <div className="px-4 sm:px-6 lg:px-8 w-full">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </>
        )
}
