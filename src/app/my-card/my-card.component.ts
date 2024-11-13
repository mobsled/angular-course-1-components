import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'my-card',
  standalone: true,
  imports: [CommonModule],
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

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(): void {
    console.log("card component - button clicked...");
    this.courseEmitter.emit(this.course);
  }

  cardClasses(): String {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
