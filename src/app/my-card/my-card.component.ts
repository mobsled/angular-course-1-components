import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'my-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent implements OnInit, AfterViewInit {

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

  @ContentChild('container')
  image: Object;

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  ngOnInit(): void {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(): void {
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
