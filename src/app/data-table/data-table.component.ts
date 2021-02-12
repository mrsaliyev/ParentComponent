import {Component} from '@angular/core';

export interface PeriodicElement {
  date: string;
  distance: string;
  time: string;
  avgSpeed: number;
  options: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2018-04-11', distance: '5,000.00', time: '42:40', avgSpeed: 7.20, options: 'Edit Delete'},
  {date: '2018-03-14', distance: '3,000.00', time: '13:40', avgSpeed: 13.20, options: 'Edit Delete'},
  {date: '2018-04-28', distance: '10,000.00', time: '10:20', avgSpeed: 9.30, options: 'Edit Delete'},
  {date: '2018-02-01', distance: '6,000.00', time: '09:30', avgSpeed: 8.70, options: 'Edit Delete'},
  {date: '2018-03-10', distance: '2,000.00', time: '05:40', avgSpeed: 4.25, options: 'Edit Delete'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent{
  displayedColumns: string[] = ['date', 'distance', 'time', 'avgSpeed', 'options'];
  dataSource = ELEMENT_DATA;
}

