import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFitComponent } from './add-fit.component';

describe('AddFitComponent', () => {
  let component: AddFitComponent;
  let fixture: ComponentFixture<AddFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
