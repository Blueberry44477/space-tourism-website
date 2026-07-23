import { ResolveFn } from '@angular/router';
import { Planet } from '../../../interfaces/planet.interface';
import { PlanetService } from '../service/planet.service';
import { inject } from '@angular/core';

export const planetResolver: ResolveFn<Planet> = (route) => {
  const planetName = route.paramMap.get('name') ?? 'moon';
  return inject(PlanetService).getPlanetByName(planetName);
};
