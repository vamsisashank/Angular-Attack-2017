import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  tiles = [
    {text: 'video 1', cols: 2, rows: 3, color: 'lightblue', src: './src/app/grid-list/resources/1.jpg'},
    {text: 'video 2', cols: 1, rows: 3, color: 'lightgreen', src: './src/app/grid-list/resources/2.jpg'},
    {text: 'video 3', cols: 1, rows: 2, color: 'lightpink', src: './src/app/grid-list/resources/3.jpg'},
    {text: 'video 5', cols: 1, rows: 2, color: '#DDBDF1', src: './src/app/grid-list/resources/4.jpg'},
    {text: 'video 6', cols: 1, rows: 3, color: '#DDBDF1', src: './src/app/grid-list/resources/4.jpg'},
    {text: 'video 4', cols: 2, rows: 2, color: '#DDBDF1', src: './src/app/grid-list/resources/4.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
