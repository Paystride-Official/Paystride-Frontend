import { ChartOption } from "@/types/types";
import ReactEcharts from "echarts-for-react";
import React, { useEffect, useRef } from "react";

const Barchart = (option: ChartOption) => {
    const chartRef = useRef<any>(null);

    useEffect(() => {
        const handleResize = () => {
            chartRef?.current?.getEchartsInstance().resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="max-w-[20rem] min-w-full h-auto"
            style={{ overflowX: "hidden" }}
        >
            <ReactEcharts
                ref={chartRef}
                option={option}
                style={{ height: "400px", width: "100%" }}
            />
        </div>
    );
};

export default Barchart;
