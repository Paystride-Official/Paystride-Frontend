import type {Metadata} from "next";
import React from "react";
import {TrendUpIcon} from "@/components/icons/Icons";

export const metadata: Metadata = {
    title: "Paystride Welcome to your Dashboard",
    description: "",
};

export default function DashboardHome() {
    return (
        <>
            <section className="card-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="info">
                    <h3>Sales</h3>
                    <h1>₦ 12,010,921</h1>
                    <p className="flex gap-4">
                        <span className="text-gray-400">/ Yesterday</span>
                        <span className="trendup inline-flex items-center gap-1 bg-green-200 px-2 rounded-2xl">
                            <TrendUpIcon /> <span className="text-green-700">10.0%</span>
                        </span>
                    </p>
                </div>
                <div className="info">
                    <h3>Settlement</h3>
                    <h1>₦ 12,010,921</h1>
                    <p className="flex gap-4">
                        <span className="text-gray-400">No. of Settlement</span>
                        <span className="trendup inline-flex items-center gap-1 bg-green-200 px-2 rounded-2xl">
                             <span className="text-green-700">100</span>
                        </span>
                    </p>
                </div>
                <div className="info">
                    <h3>Pay Points</h3>
                    <h1>6</h1>
                </div>
            </section>
        </>
    );
}
