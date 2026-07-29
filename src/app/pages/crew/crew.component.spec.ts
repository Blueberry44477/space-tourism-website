import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
