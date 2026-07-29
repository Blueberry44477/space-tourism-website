import { CrewMember } from './../interface/crew-member.interface';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrewCarouselService {
  private crew = signal<CrewMember[]>([
    {
      role: 'commander',
      name: 'Douglas Hurley',
      bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps
        pilot and former NASA astronaut. He launched into space for the third
        time as commander of Crew Dragon Demo-2.`,
      image: '/pages/crew/image-douglas-hurley.webp'
    },
    {
      role: 'mission specialist',
      name: 'Mark Shuttleworth',
      bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical,
        the company behind the Linux-based Ubuntu operating system.
        Shuttleworth became the first South African to travel to space as a
        space tourist.`,
      image: '/pages/crew/image-mark-shuttleworth.webp'
    },
    {
      role: 'pilot',
      name: 'Victor Glover',
      bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to
        the International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.`,
      image: '/pages/crew/image-victor-glover.webp'
    },
    {
      role: 'flight engineer',
      name: 'Anoushen Ansari',
      bio: `Anousheh Ansari is an Iranian American engineer and co-founder of
        Prodea Systems. Ansari was the fourth self-funded space tourist, the
        first self-funded woman to fly to the ISS, and the first Iranian in
        space.`,
      image: '/pages/crew/image-anousheh-ansari.webp'
    }
  ]);

  public getCrew(): CrewMember[] {
    return this.crew();
  }
}
