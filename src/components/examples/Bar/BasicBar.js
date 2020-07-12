
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import ChartWrapper from '../../common/ChartWrapper';
import { Radio } from 'antd';

const BasicBar = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    Highcharts.chart('basic-bar', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
        series: {
          stacking: state
        },
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31]
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40]
      }]
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
      <div id="basic-bar"></div>
    </ChartWrapper>
  )
}

export default BasicBar;