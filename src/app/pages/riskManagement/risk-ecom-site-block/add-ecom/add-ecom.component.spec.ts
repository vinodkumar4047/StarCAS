import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEcomComponent } from './add-ecom.component';

describe('AddEcomComponent', () => {
  let component: AddEcomComponent;
  let fixture: ComponentFixture<AddEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
