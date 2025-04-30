import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMControlComponent } from './atm-control.component';

describe('ATMControlComponent', () => {
  let component: ATMControlComponent;
  let fixture: ComponentFixture<ATMControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATMControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATMControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
