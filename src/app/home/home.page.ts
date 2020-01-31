import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrUsers = [{
    id: '1',
    name: 'Nirav'
  }, {
    id: '2',
    name: 'Parth'
  }, {
    id: '3',
    name: 'Keval'
  }];
  selectedUserId = '1';
  selectedUserName = 'Nirav';

  constructor() {}

  ionViewWillEnter() {
    this.plotChart();
  }

  plotChart() {
    const myChart = Highcharts.chart('highcharts', {
      chart: {
        renderTo: 'highcharts',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        margin: [25, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: {
        text: `${this.selectedUserName}'s hours`,
        margin: 50
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.value}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.value}',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Day',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Mon',
          y: 75,
          value: 8.18
        }, {
          name: 'Tue',
          y: 55,
          value: 10
        }, {
          name: 'Wed',
          y: 45,
          value: 8.35
        }, {
          name: 'Thur',
          y: 30,
          value: 8.46
        }, {
          name: 'Fri',
          y: 35,
          value: 9.26
        }, {
          name: 'Sat',
          y: 25,
          value: 5
        }, {
          name: 'Sun',
          y: 10,
          value: 1
        }]
      }],
      credits: {
        enabled: false
      }
    });
  }

  selectUsers(event: any) {
    this.arrUsers.forEach(item => {
      if (item.id === event.detail.value) {
        this.selectedUserId = item.id;
        this.selectedUserName = item.name;
        this.plotChart();
      }
    });
  }
}
