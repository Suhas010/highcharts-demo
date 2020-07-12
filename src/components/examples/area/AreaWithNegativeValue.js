import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { AREA_DATA, AREA_DATA_1 } from "../../../utils/constants";
import ChartWrapper from "../../common/ChartWrapper";
import { Radio } from "antd";

const BasicArea = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    Highcharts.chart("basic-area", {
      chart: {
        type: "area",
      },
      accessibility: {
        description:
          "Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.",
      },
      title: {
        text: "US and USSR nuclear stockpiles",
      },
      subtitle: {
        text:
          'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
          'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          "armscontrol.org</a>",
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          },
        },
        accessibility: {
          rangeDescription: "Range: 1940 to 2017.",
        },
      },
      yAxis: {
        title: {
          text: "Nuclear weapon states",
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + "k";
          },
        },
      },
      tooltip: {
        pointFormat:
          "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          stacking: state,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "USA",
          data: AREA_DATA_1,
        },
        {
          name: "USSR/Russia",
          data: AREA_DATA
        },
      ],
    });
  }, [state]);
  
  return (
    <ChartWrapper>
      <Radio.Group
          options={ [
            { label: "No Staking", value: "" },
            { label: 'Normal', value: 'normal' },
            { label: 'Overlap', value: 'overlap' },
            { label: 'Percent', value: 'percent' },
            { label: 'Stream', value: 'stream' },
          ]}
          onChange={({target : { value }}) => setState(value)}
          value={state}
          optionType="button"
        />
      <div id="basic-area"></div>
    </ChartWrapper>
  )
};

export default BasicArea;