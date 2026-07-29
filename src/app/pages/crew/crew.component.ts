import { Component } from '@angular/core';
import { CrewCarouselComponent } from './components/crew-carousel/crew-carousel.component';

@Component({
  selector: 'app-crew',
  imports: [CrewCarouselComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css',
})
export class CrewComponent {}
