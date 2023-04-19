import { Component } from '@angular/core';
import { Chart } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import * as ChartLabels from 'chart.js-plugin-labels-dv';

import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chartJs: any = Chart;
  chartLabelPlugin: any = ChartDataLabels;

  type = 'pie';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };
  plugin = this.chartLabelPlugin;
  options = {
    plugins: {
      // labels: {
      //   // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
      //   render: 'value',

      //   // precision for percentage, default is 0
      //   precision: 0,

      //   // identifies whether or not labels of value 0 are displayed, default is false
      //   showZero: true,

      //   // font size, default is defaultFontSize
      //   fontSize: 12,

      //   // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
      //   fontColor: 'black',

      //   // font style, default is defaultFontStyle
      //   fontStyle: 'normal',

      //   // font family, default is defaultFontFamily
      //   fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      //   // draw text shadows under labels, default is false
      //   textShadow: true,

      //   // text shadow intensity, default is 6
      //   shadowBlur: 10,

      //   // text shadow X offset, default is 3
      //   shadowOffsetX: -5,

      //   // text shadow Y offset, default is 3
      //   shadowOffsetY: 5,

      //   // text shadow color, default is 'rgba(0,0,0,0.3)'
      //   shadowColor: 'rgba(255,0,0,0.75)',

      //   // draw label in arc, default is false
      //   // bar chart ignores this
      //   arc: true,

      //   // position to draw label, available value is 'default', 'border' and 'outside'
      //   // bar chart ignores this
      //   // default is 'default'
      //   position: 'outside',

      //   // draw label even it's overlap, default is true
      //   // bar chart ignores this
      //   overlap: true,

      //   // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
      //   showActualPercentages: true,

      //   // set images when `render` is 'image'
      //   images: [
      //     {
      //       src: 'image.png',
      //       width: 16,
      //       height: 16,
      //     },
      //   ],

      //   // add padding when position is `outside`
      //   // default is 2
      //   outsidePadding: 4,

      //   // add margin of text when position is `outside` or `border`
      //   // default is 2
      //   textMargin: 4,
      // },

      datalabels: {
        /* show value in percents */
        formatter: (value, ctx) => {
          let sum = 0;
          const dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          const percentage = (value * 100) / sum;
          return percentage !== 0 ? percentage.toFixed(2) + '%' : '';
        },
        color: 'black',
      },
    },
  };
}
