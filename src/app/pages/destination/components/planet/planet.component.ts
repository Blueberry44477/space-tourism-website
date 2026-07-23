import { Component, input } from '@angular/core';
import { Planet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-description.component',
  imports: [],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  planet = input.required<Planet>();

  tabs = [
    { name: 'moon', path: '/destination/moon' },
    { name: 'mars', path: '/destination/mars' },
    { name: 'europa', path: '/destination/europa' },
    { name: 'titan', path: '/destination/titan' }
  ];
}
