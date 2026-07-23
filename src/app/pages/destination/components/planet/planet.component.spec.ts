import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponent } from './planet.component';

describe('PlanetDescriptionComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
