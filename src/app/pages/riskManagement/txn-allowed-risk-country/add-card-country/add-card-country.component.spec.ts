import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardCountryComponent } from './add-card-country.component';

describe('AddCardCountryComponent', () => {
  let component: AddCardCountryComponent;
  let fixture: ComponentFixture<AddCardCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCardCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
