import { Injectable } from '@angular/core';
import { Planet } from '../interface/planet.interface';

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
    },
    {
      name: "mars",
      image: "/pages/destination/image-mars.png",
      description: "  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 months"
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
