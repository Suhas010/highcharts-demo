import React, { useEffect } from "react";
import Highcharts from "highcharts";
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import ChartWrapper from "../../common/ChartWrapper";
import {
  SCATTER_MALE_DATA,
  SCATTER_FEMALE_DATA,
} from "../../../utils/constants";

accessibility(Highcharts);
const BasicScatter = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "scatter",
        plotBorderWidth: 1,
        zoomType: "xy",
      },
      title: {
        text: "Height Versus Weight of 507 Individuals by Gender",
      },
      subtitle: {
        text: "Source: Heinz  2003",
      },
      xAxis: {
        title: {
          enabled: true,
          text: "Height (cm)",
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: "Weight (kg)",
        },
      },
      legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "top",
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1,
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)",
              },
            },
          },
          states: {
            hover: {
              marker: {
                enabled: false,
              },
            },
          },
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: "{point.x} cm, {point.y} kg",
          },
        },
      },
      series: [
        {
          name: "Female",
          color: "rgba(223, 83, 83, .5)",
          data: SCATTER_FEMALE_DATA,
        },
        {
          name: "Male",
          color: "rgba(119, 152, 191, .5)",
          data: SCATTER_MALE_DATA,
        },
      ],
    });
  }, []);
  return (
    <ChartWrapper>
      <div className="line-chart chart" id="container"></div>
    </ChartWrapper>
  );
};

export default BasicScatter;
