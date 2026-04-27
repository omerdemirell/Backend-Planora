import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzCardModule } from 'ng-zorro-antd/card';
@Component({
  selector: 'app-dashboard',
  imports: [NzCardModule,NgApexchartsModule, TranslatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  chartSeries = [44, 33, 23];

chartLabels = ['Tamamlanan', 'Devam Eden', 'Bekleyen'];

chartOptions = {
  chart: {
    type: 'donut' as const,
    height: 320
  },
  labels: this.chartLabels,
  series: this.chartSeries,
  legend: {
    position: 'bottom' as const
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 260
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};
barSeries = [
  {
    name: 'Plans',
    data: [3, 4, 2, 5, 6, 4, 3]
  }
];

barChart = {
  type: 'bar' as const,
  height: 320
};

barXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};
categorySeries = [40, 30, 30];

categoryLabels = ['Spor', 'Ders', 'Okuma'];

categoryChart = {
  type: 'pie' as const,
  height: 300
};
}
