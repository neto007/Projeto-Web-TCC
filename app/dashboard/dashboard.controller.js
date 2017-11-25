import styles from './dashboard.module.scss';

export default class {

  constructor() {
    'ngInject';   
    this.styles = styles;

    this.labels = ["Março", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro"];    
    this.series = ['Series A', 'Series B'];
    this.data = [
      [65, 59, 80, 81, 56, 55, 60]
    ];


    this.labelsVisu = ["Março", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro"];    
    this.seriesVisu = ['Series A', 'Series B'];
    this.dataVisu = [
      [2, 3, 5, 10, 20, 30, 50]
    ];

    this.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    this.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: false,
            position: 'right'
          }
        ]
      }
    };


    this.labelsBar = ["Abril", "Maio", "Junho", "Julho", "Setembro", "Outubro", "Novembro"];
    this.seriesBar = ['Series A', 'Series B'];
  
    this.dataBar = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 45, 27, 30]
    ];

    this.labelsRadar =["Shows", "Open Bar", "Stand-UP", "Eletro", "Promoções"];
    
    this.dataRadar = [
      [95, 70, 60, 5, 80]
    ];
}

  $onInit() {    
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
