import ReactEcharts from "echarts-for-react";
import { PieChartOption } from "@/types/types";

const PieChart = (option: PieChartOption) => {
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};

export default PieChart;
