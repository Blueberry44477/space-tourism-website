import { TestBed } from '@angular/core/testing';

import { CrewCarouselService } from './crew-carousel.service';

describe('CrewCarouselService', () => {
  let service: CrewCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
