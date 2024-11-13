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

  // Dobrý deň, tu je Gajdoš pri telefóne.
  // Ja by som mal mat dneska preventivku 10:50.
  
  // Viete co volam kvoli tomu, ja sa velmi ospravedlnujem, 
  // musel som niečo chytiť v robote tento týždeň, meral som si rano teplotu 
  // a mal som 38. Ja by som vam bol byval zavolal aj skor, no vcera som bol este uplne v poriadku.
  
  // Chcel by som sa prosím spýtať, či by som sa nemohol s vami dohodnúť
  // možno na náhradnom termíne ak by to bolo možné. Dosť ľudí je aj v robote chorých teraz.
  // Behnem dnes lekárovi.

  @Input()
  cardIndex: Number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(): void {
    console.log("card component - button clicked...");
    this.courseEmitter.emit(this.course);
  }
}
