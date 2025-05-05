import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMTypeComponent } from './atm-type.component';

describe('ATMTypeComponent', () => {
  let component: ATMTypeComponent;
  let fixture: ComponentFixture<ATMTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATMTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATMTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
