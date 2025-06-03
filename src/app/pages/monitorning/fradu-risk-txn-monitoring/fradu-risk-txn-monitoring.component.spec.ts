import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraduRiskTxnMonitoringComponent } from './fradu-risk-txn-monitoring.component';

describe('FraduRiskTxnMonitoringComponent', () => {
  let component: FraduRiskTxnMonitoringComponent;
  let fixture: ComponentFixture<FraduRiskTxnMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraduRiskTxnMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraduRiskTxnMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
