import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  testChart = new Chart({
    chart: { type: 'pie' },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'first', y: 1, color: '#eeeeee' },
          { name: 'second', y: 1, color: '#393e64' },
          { name: 'third', y: 1, color: '#0000abd5' },
        ]
      }
    ]
  });

  lineChart = new Chart({
    chart: { type: 'line' },
    title: { text: 'Chart Diagram' },
    series: [
      {
        name: 'Chart admitted',
        data: [1, 4, 3, 6, 7, 8, 6, 3, 5, 7]
      }
    ] as any
  });
  pieChart = new Chart(
    {
    chart:{type: 'pie' , plotShadow:false},
    credits:{enabled:false},
    plotOptions:{
      pie:{
        innerSize:'80%',
        borderRadius:10,
        // borderColor:'#352e25',
        slicedOffset:10,
        dataLabels:{
          connectorWidth:0
        }
      }
    },
    title:{
      verticalAlign:'middle',
      floating:true,
      text:'Test'
    },
    legend:{
      enabled:false, 
    },
    series:[{
      type:'pie',
      data:[
        { name: 'first', y: 1, color: '#eeeeee' },
        { name: 'second', y: 1, color: '#393e64' },
        { name: 'third', y: 1, color: '#0000abd5' },
      ]
    }]

    }
  )
}
