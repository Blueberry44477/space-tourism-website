import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { planetResolver } from './planet.resolver';
import { Planet } from '../interface/planet.interface';

describe('planetResolver', () => {
  const executeResolver: ResolveFn<Planet> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => planetResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
