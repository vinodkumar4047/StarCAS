import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudMonitoringDetailsComponent } from './fraud-monitoring-details.component';

describe('FraudMonitoringDetailsComponent', () => {
  let component: FraudMonitoringDetailsComponent;
  let fixture: ComponentFixture<FraudMonitoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudMonitoringDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudMonitoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
