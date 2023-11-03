import { ChartOption } from "@/types";
import ReactEcharts from "echarts-for-react";

const Barchart = (option: ChartOption) => {
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};

export default Barchart;
