import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  title = "Words That Should Be a Title";
  constructor() { }

  ngOnInit() {
  }

}
