import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { DownOutlined } from "@ant-design/icons";
import accessibility from "highcharts/modules/variable-pie";
import ChartWrapper from "../../common/ChartWrapper";
import { Checkbox, Menu, Dropdown, Select } from "antd";

accessibility(Highcharts);
const BasicPie = () => {
  const [state, setState] = useState({
    showInLegend: false,
    semiCircle: false,
    startAngle: 0,
    endAngle: 360,
    variableRadius: false,
    layout: "horizontal",
    align: "left",
  });
  const {
    showInLegend,
    startAngle,
    endAngle,
    semiCircle,
    variableRadius,
    layout,
    align,
  } = state;
  useEffect(() => {
    Highcharts.chart(
      "container",
      variableRadius
        ? {
            chart: {
              type: "variablepie",
            },
            title: {
              text: "Countries compared by population density and total area.",
            },
            tooltip: {
              headerFormat: "",
              pointFormat:
                '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                "Area (square km): <b>{point.y}</b><br/>" +
                "Population density (people per square km): <b>{point.z}</b><br/>",
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                showInLegend,
                startAngle,
                endAngle,
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
              },
            },
            series: [
              {
                minPointSize: 10,
                innerSize: "20%",
                zMin: 0,
                name: "countries",
                data: [
                  {
                    name: "Spain",
                    y: 505370,
                    z: 92.9,
                  },
                  {
                    name: "France",
                    y: 551500,
                    z: 118.7,
                  },
                  {
                    name: "Poland",
                    y: 312685,
                    z: 124.6,
                  },
                  {
                    name: "Czech Republic",
                    y: 78867,
                    z: 137.5,
                  },
                  {
                    name: "Italy",
                    y: 301340,
                    z: 201.8,
                  },
                  {
                    name: "Switzerland",
                    y: 41277,
                    z: 214.5,
                  },
                  {
                    name: "Germany",
                    y: 357022,
                    z: 235.6,
                  },
                ],
              },
            ],
          }
        : {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: "pie",
            },
            legend: {
              align,
              layout,
            },
            title: {
              text: "Browser market shares in January, 2018",
            },
            tooltip: {
              pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            accessibility: {
              point: {
                valueSuffix: "%",
              },
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",

                showInLegend,
                startAngle,
                endAngle,
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
              },
            },
            series: [
              {
                name: "Brands",
                colorByPoint: true,
                data: [
                  {
                    name: "Chrome",
                    y: 61.41,
                    sliced: true,
                    selected: true,
                  },
                  {
                    name: "Internet Explorer",
                    y: 11.84,
                  },
                  {
                    name: "Firefox",
                    y: 10.85,
                  },
                  {
                    name: "Edge",
                    y: 4.67,
                  },
                  {
                    name: "Safari",
                    y: 4.18,
                  },
                  {
                    name: "Sogou Explorer",
                    y: 1.64,
                  },
                  {
                    name: "Opera",
                    y: 1.6,
                  },
                  {
                    name: "QQ",
                    y: 1.2,
                  },
                  {
                    name: "Other",
                    y: 2.61,
                  },
                ],
              },
            ],
          }
    );
  }, [state]);
  
  return (
    <ChartWrapper>
      <Checkbox
        onClick={() => setState({ ...state, showInLegend: !showInLegend })}
        value={showInLegend}
        name="Show Legend"
      >
        Show Legend
      </Checkbox>
      {showInLegend && (
        <>
          <Select
            defaultValue="horizontal"
            style={{ width: 120 }}
            onChange={(value) => setState({ ...state, layout: value })}
          >
            <Select.Option value="vertical">Vertical</Select.Option>
            <Select.Option value="horizontal">Horizontal</Select.Option>
          </Select>
          <Select
            style={{ width: 120 }}
            defaultValue="center"
            onChange={(value) => setState({ ...state, align: value })}
          >
            <Select.Option value="center">Center</Select.Option>
            <Select.Option value="left">Left</Select.Option>
            <Select.Option value="right">Right</Select.Option>
          </Select>
        </>
      )}
      <Checkbox
        onClick={() =>
          setState(
            semiCircle
              ? { ...state, semiCircle: false, startAngle: 0, endAngle: 360 }
              : { ...state, semiCircle: true, startAngle: -90, endAngle: 90 }
          )
        }
        value={showInLegend}
        name="Show Legend"
      >
        Semi Circle
      </Checkbox>
      <Checkbox
        onClick={() => setState({ ...state, variableRadius: !variableRadius })}
        value={variableRadius}
        name="Show Legend"
      >
        Variable radius pie
      </Checkbox>

      <div className="line-chart chart" id="container"></div>
    </ChartWrapper>
  );
};

export default BasicPie;
