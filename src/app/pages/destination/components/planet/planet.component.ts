import { Component, input } from '@angular/core';
import { Planet } from './interface/planet.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-planet.component',
  imports: [RouterLink],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css',
})
export class PlanetComponent {
  protected planet = input.required<Planet>();

  protected tabs = [
    { name: 'moon', path: '/destination/moon' },
    { name: 'mars', path: '/destination/mars' },
    { name: 'europa', path: '/destination/europa' },
    { name: 'titan', path: '/destination/titan' }
  ];
}
