import { Injectable } from '@angular/core';
import {course} from '../course'
@Injectable()
export class CourseService {
  courses:course[];


  constructor() {
    this.courses=[
      {
        Image:"a1.jpg",
        name:"Angular 4",
        price:200,
        descripation:"angular component"
      },
      {
        Image:"a4.jpg",
        name:"CGI COMP",
        price:20000,
        descripation:"angular component"
      },

      {
        Image:"a3.jpg",
        name:"MICRO SOFT COM",
        price:12000,
        descripation:"angular component"
      },
      {
        Image:"a4",
        name:"HP PRODCUT",
        price:150000,
        descripation:"angular component"
      },
    ];
   }
getcourses():course[]{
  return this.courses;
}
}
