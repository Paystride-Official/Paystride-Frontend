import React from "react";
import Barchart from "../BarChart/Barchart";
import { ChartOption } from "@/types";

const SalesChart = () => {
  const option: ChartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    grid: {
      left: "4%",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "March",
          "Apr",
          "May",
          "June",
          "Junly",
          "Aug",
          "Sept",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],

    yAxis: [
      {
        value: true,
      },
    ],
    series: [
      {
        itemStyle: {
          color: "#5932EA",
          barBorderRadius: [10],
        },
        name: "xAxis",
        type: "bar",
        barWidth: "70%",
        data: [50, 80, 400, 334, 540, 330, 220, 100, 120],
      },
    ],
  };
  return <Barchart {...option} />;
};

export default SalesChart;
