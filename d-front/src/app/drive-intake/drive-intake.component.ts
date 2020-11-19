import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Honda', weight: 'Civic'},
  {position: 2, name: 'Chevrolet', weight: 'Cobalt'},
  {position: 3, name: 'Toyota', weight: 'AE86'}
];

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-drive-intake',
  templateUrl: './drive-intake.component.html',
  styleUrls: ['./drive-intake.component.css']
})
export class DriveIntakeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
