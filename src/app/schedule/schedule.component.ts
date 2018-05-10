import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
upcoming:string[];

  constructor() {
    this.upcoming=[
      "Angular 4 starts on 11 june",
      "core Java start 30 may",
      "SQL Start June 2"
    ]
   }

  ngOnInit() {
  }

}
