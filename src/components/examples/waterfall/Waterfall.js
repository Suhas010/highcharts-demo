import React, { useEffect } from "react";
import Highcharts from "highcharts";
import more from "highcharts/highcharts-more";
import ChartWrapper from "../../common/ChartWrapper";

const Waterfall = () => {
  useEffect(() => {
    console.log(console.count("!!"));
    more(Highcharts);
    const getWaterFallChart = () => {
      Highcharts.chart("waterfall", {
        responsive: true,
        chart: {
          type: "waterfall",
          events: {
            redraw: function () {
              console.log(this);
            },
            render: function () {
              console.log("object", this)
            }
          },
        },
        title: {
          text: "Highcharts Waterfall",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "USD",
          },
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          pointFormat: "<b>${point.y}</b> USD",
        },
        series: [
          {
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [
              {
                name: "Start",
                y: 120000,
              },
              {
                name: "Product Revenue",
                y: 569000,
              },
              {
                name: "Service Revenue",
                y: 231000,
              },
              {
                name: "Positive Balance",
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1],
              },
              {
                name: "Fixed Costs",
                y: -342000,
              },
              {
                name: "Variable Costs",
                y: -233000,
              },
              {
                name: "Balance",
                isSum: true,
                color: Highcharts.getOptions().colors[1],
              },
            ],
            dataLabels: {
              enabled: true,
              formatter: function () {
                return Highcharts.numberFormat(this.y / 1000, 0, ",") + "k";
              },
              style: {
                fontWeight: "bold",
              },
            },
            pointPadding: 0,
          },
        ],
      });
    };
    getWaterFallChart();
  }, []);

  return (
    <ChartWrapper>
      <div className="highchart" id="waterfall"></div>
    </ChartWrapper>
  );
};

export default Waterfall;
