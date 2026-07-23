import { Injectable } from '@angular/core';
import { Planet } from '../../../interfaces/planet.interface';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  planetInfo: Planet[] = [
    {
      name: "moon",
      image: "/pages/destination/image-moon.png",
      description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help\
         regain perspective and come back refreshed. While you’re there, take in some history\
         by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 days"
    }
  ]

  getPlanetByName(name: string): Planet {
    const planet = this.planetInfo.find((planet) => planet.name === name);
    if (!planet) {
      return this.planetInfo[0];
    }
    return planet;
  }
}
