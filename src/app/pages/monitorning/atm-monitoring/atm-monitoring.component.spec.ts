import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMMonitoringComponent } from './atm-monitoring.component';

describe('ATMMonitoringComponent', () => {
  let component: ATMMonitoringComponent;
  let fixture: ComponentFixture<ATMMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATMMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATMMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
