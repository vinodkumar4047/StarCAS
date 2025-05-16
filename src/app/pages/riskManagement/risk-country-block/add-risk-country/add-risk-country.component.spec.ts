import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskCountryComponent } from './add-risk-country.component';

describe('AddRiskCountryComponent', () => {
  let component: AddRiskCountryComponent;
  let fixture: ComponentFixture<AddRiskCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRiskCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRiskCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
