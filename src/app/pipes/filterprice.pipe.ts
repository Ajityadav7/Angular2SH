import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course'

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(courses: any, pricetype?: any): any {
    let temp:course[]=[];
    if(pricetype=="Highly price"){
for(let x in courses){
  if(courses[x].price>=15000 )
  temp.push(courses[x]);
}
  return temp;
}

else if(pricetype=="Moderatly price"){
  for(let x in courses){
    if(courses[x].price>=12000 )
    temp.push(courses[x]);
    return temp;
  }
}
 else if(pricetype=="Normal price"){
    for(let x in courses){
      if(courses[x].price>=10000 )
      temp.push(courses[x]);
    }
      return temp;
    }
    else{
      return courses;
    }
  }}
