import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import ChartWrapper from "../../common/ChartWrapper";
import { Radio, Button } from "antd";
import { dataPrev, data, countries } from "../../../utils/constants";

const BarComparison = () => {
  useEffect(() => {
    function getData(data) {
      return data.map(function (country, i) {
        return {
          name: country[0],
          y: country[1],
          color: countries[i].color,
        };
      });
    }

    var chart = Highcharts.chart("comp-bar", {
      chart: {
        type: "column",
      },
      title: {
        text: "Summer Olympics 2016 - Top 5 countries by Gold medals",
      },
      subtitle: {
        text:
          'Comparing to results from Summer Olympics 2012 - Source: <ahref="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table">Wikipedia</a>',
      },
      plotOptions: {
        series: {
          grouping: false,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} medals</b><br/>',
      },
      xAxis: {
        type: "category",
        max: 4,
        labels: {
          useHTML: true,
          animate: true,
          formatter: function () {
            var value = this.value,
              output;

            countries.forEach(function (country) {
              if (country.name === value) {
                output = country.flag;
              }
            });

            return (
              '<span><img src="https://image.flaticon.com/icons/svg/197/' +
              output +
              '.svg" style="width: 40px; height: 40px;"/><br></span>'
            );
          },
        },
      },
      yAxis: [
        {
          title: {
            text: "Gold medals",
          },
          showFirstLabel: false,
        },
      ],
      series: [
        {
          color: "rgb(158, 159, 163)",
          pointPlacement: -0.2,
          linkedTo: "main",
          data: dataPrev[2016].slice(),
          name: "2012",
        },
        {
          name: "2016",
          id: "main",
          dataSorting: {
            enabled: true,
            matchByName: true,
          },
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: "16px",
              },
            },
          ],
          data: getData(data[2016]).slice(),
        },
      ],
      exporting: {
        allowHTML: true,
      },
    });

    var years = [2016, 2012, 2008, 2004, 2000];

    years.forEach(function (year) {
      var btn = document.getElementById(year);

      btn.addEventListener("click", function () {
        document
          .querySelectorAll(".buttons button.ant-btn-primary")
          .forEach(function (active) {
            active.className = "ant-btn";
          });
        btn.className = "ant-btn-primary ant-btn";

        chart.update(
          {
            title: {
              text:
                "Summer Olympics " + year + " - Top 5 countries by Gold medals",
            },
            subtitle: {
              text:
                "Comparing to results from Summer Olympics " +
                (year - 4) +
                ' - Source: <ahref="https://en.wikipedia.org/wiki/' +
                year +
                '_Summer_Olympics_medal_table">Wikipedia</a>',
            },
            series: [
              {
                name: year - 4,
                data: dataPrev[year].slice(),
              },
              {
                name: year,
                data: getData(data[year]).slice(),
              },
            ],
          },
          true,
          false,
          {
            duration: 800,
          }
        );
      });
    });
  }, []);

  return (
    <ChartWrapper>
     <div className="buttons">
      <Button id="2000" className="">2000</Button>
      <Button id="2004" className="">2004</Button>
      <Button id="2008" className="">2008</Button>
      <Button id="2012" className="">2012</Button>
      <Button id="2016" className=" ant-btn-primary ant-btn">2016</Button>
     </div>
      <div id="comp-bar"></div>
    </ChartWrapper>
  );
};

export default BarComparison;
