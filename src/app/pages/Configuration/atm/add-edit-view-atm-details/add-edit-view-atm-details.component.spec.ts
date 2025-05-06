import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewAtmDetailsComponent } from './add-edit-view-atm-details.component';

describe('AddEditViewAtmDetailsComponent', () => {
  let component: AddEditViewAtmDetailsComponent;
  let fixture: ComponentFixture<AddEditViewAtmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditViewAtmDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditViewAtmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
