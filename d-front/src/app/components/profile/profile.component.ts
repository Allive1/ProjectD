import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Link{
  url: string;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  links: Link[] = [
    {url: '../assets/civic_img.jpg', name: 'The Humbug'},
    {url: 'assets/integra_img.jpg', name: 'The Glider'}
    // {url: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Third Choice'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
