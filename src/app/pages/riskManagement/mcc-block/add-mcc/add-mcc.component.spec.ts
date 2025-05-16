import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMccComponent } from './add-mcc.component';

describe('AddMccComponent', () => {
  let component: AddMccComponent;
  let fixture: ComponentFixture<AddMccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
