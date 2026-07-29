import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCarouselComponent } from './crew-carousel.component';

describe('CrewCarouselComponent', () => {
  let component: CrewCarouselComponent;
  let fixture: ComponentFixture<CrewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrewCarouselComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
