import { PieChartOption } from "@/types/types";
import React from "react";
import PieChart from "../PieChart/PieChart";

type Props = {};

const DonoughtChart = (props: Props) => {
  const option: PieChartOption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "15%",
      right: "10%",
      orient: "vertical",
      itemWidth: 42,
    },

    series: [
      {
        right: "40%",
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return <PieChart {...option} />;
};

export default DonoughtChart;

{
  /* 
 const DonoughtChartData = {
 type:"pie"
   data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
 }














*/
}
