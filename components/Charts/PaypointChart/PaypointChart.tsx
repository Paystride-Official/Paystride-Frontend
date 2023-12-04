import React from "react";
import Barchart from "../BarChart/Barchart";
import { ChartOption } from "@/types/types";

type Props = {};

const PaypointChart = (props: Props) => {
  const option: ChartOption = {
    // title: {
    //   text: "Rainfall vs Evaporation",
    //   subtext: "Fake Data",
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["point1", "point2", "point3", "point4", "point5"],
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
    calculable: true,
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        itemStyle: {
          color: "#5932EA",
          barBorderRadius: [3],
        },
        name: "point1",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        itemStyle: {
          color: "#C016A5",
          barBorderRadius: [3],
        },
        name: "point2",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#17C098",
          barBorderRadius: [3],
        },
        name: "point3",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#FFE872",
          barBorderRadius: [3],
        },
        name: "point4",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#F4757C",
          barBorderRadius: [3],
        },
        name: "point5",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
    ],
  };

  return <Barchart {...option} />;
};

export default PaypointChart;

const DonoughtChartData = {
  type: "pie",
  data: [
    { value: 1048, name: "Search Engine" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" },
  ],
};

const paypointBarchart = {
  xAxis: {
    type: "category",
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  yAxis: {
    type: "value",

    data: [
      {
        itemStyle: {
          color: "#5932EA",
          barBorderRadius: [3],
        },
        name: "point1",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        itemStyle: {
          color: "#C016A5",
          barBorderRadius: [3],
        },
        name: "point2",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#17C098",
          barBorderRadius: [3],
        },
        name: "point3",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#FFE872",
          barBorderRadius: [3],
        },
        name: "point4",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        itemStyle: {
          color: "#F4757C",
          barBorderRadius: [3],
        },
        name: "point5",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
    ],
  },
};
