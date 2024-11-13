import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'my-card',
  standalone: true,
  imports: [],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {
  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: false
  })
  index: Number;

  @Input()
  cardIndex: Number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(): void {
    console.log("card component - button clicked...");
    this.courseEmitter.emit(this.course);
  }
}
