import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudMonitoringComponent } from './fraud-monitoring.component';

describe('FraudMonitoringComponent', () => {
  let component: FraudMonitoringComponent;
  let fixture: ComponentFixture<FraudMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
