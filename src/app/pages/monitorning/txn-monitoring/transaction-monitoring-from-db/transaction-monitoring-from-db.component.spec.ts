import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMonitoringFromDBComponent } from './transaction-monitoring-from-db.component';

describe('TransactionMonitoringFromDBComponent', () => {
  let component: TransactionMonitoringFromDBComponent;
  let fixture: ComponentFixture<TransactionMonitoringFromDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionMonitoringFromDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionMonitoringFromDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
