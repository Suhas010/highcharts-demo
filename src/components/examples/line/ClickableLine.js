import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import data from 'highcharts/modules/data';
import serieslable from 'highcharts/modules/series-label';
import ChartWrapper from '../../common/ChartWrapper';
data(Highcharts);
serieslable(Highcharts);
const ClickableLine = () => {
  useEffect(() => {
    Highcharts.chart('containerq', {

      chart: {
          scrollablePlotArea: {
              minWidth: 700
          }
      },
  
      data: {
          csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
          beforeParse: function (csv) {
              return csv.replace(/\n\n/g, '\n');
          }
      },
  
      title: {
          text: 'Daily sessions at www.highcharts.com'
      },
  
      subtitle: {
          text: 'Source: Google Analytics'
      },
  
      xAxis: {
          tickInterval: 7 * 24 * 3600 * 1000, // one week
          tickWidth: 0,
          gridLineWidth: 1,
          labels: {
              align: 'left',
              x: 3,
              y: -3
          }
      },
  
      yAxis: [{ // left y axis
          title: {
              text: null
          },
          labels: {
              align: 'left',
              x: 3,
              y: 16,
              format: '{value:.,0f}'
          },
          showFirstLabel: false
      }, { // right y axis
          linkedTo: 0,
          gridLineWidth: 0,
          opposite: true,
          title: {
              text: null
          },
          labels: {
              align: 'right',
              x: -3,
              y: 16,
              format: '{value:.,0f}'
          },
          showFirstLabel: false
      }],
  
      legend: {
          align: 'left',
          verticalAlign: 'top',
          borderWidth: 0
      },
  
      tooltip: {
          shared: true,
          crosshairs: true
      },
  
      plotOptions: {
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                          
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          }
      },
  
      series: [{
          name: 'All sessions',
          lineWidth: 4,
          marker: {
              radius: 4
          }
      }, {
          name: 'New users'
      }]
  });
  }, []);
  return (
    <ChartWrapper>
      <div id="containerq" ></div>
    </ChartWrapper>
  )
}

export default ClickableLine;
