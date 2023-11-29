const option = {
  xAxis: [
    {
      type: "category",
      //   this  data is what is to be display on the x axis
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
    },
  ],

  yAxis: [
    {
      value: true,
    },
  ],
  series: [
    {
      name: "xAxis",
      type: "bar",
      barWidth: "60%",

      //   this  data is what is to be display on the x axis
      data: [50, 80, 400, 334, 540, 330, 220, 100, 120],
    },
  ],
};

const BarChartData = {
  xAxis: {
    type: "category",
    xAxisData: [],
  },
  yAxis: {
    type: "bar",
    yAxisData: [],
  },
};
