import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmLocationsComponent } from './atm-locations.component';

describe('AtmLocationsComponent', () => {
  let component: AtmLocationsComponent;
  let fixture: ComponentFixture<AtmLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
