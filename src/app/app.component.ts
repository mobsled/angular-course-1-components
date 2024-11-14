import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2024, 0, 1);
  title = COURSES[2].description;
  price = 9.99123125124123;
  rate = 0.67;
  course = COURSES[1];

  onCourseSelected(course:Course):void {
    console.log("NEW LOG", course);
  }

  trackCourse(index:Number, course:Course):Number {
    return course.id;
  }
}
