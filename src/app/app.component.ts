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

  onCourseSelected(course:Course):void {
    console.log("NEW LOG", course);
  }

  trackCourse(index:Number, course:Course):Number {
    return course.id;
  }
}
