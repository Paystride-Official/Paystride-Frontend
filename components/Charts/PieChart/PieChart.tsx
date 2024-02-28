import ReactEcharts from "echarts-for-react";
import { PieChartOption } from "@/types/types";
import { useEffect, useRef } from "react";

const PieChart = (option: PieChartOption) => {
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
        <div className="max-w-[20rem] min-w-full">
            <ReactEcharts ref={chartRef} option={option} />
        </div>
    );
};

export default PieChart;
