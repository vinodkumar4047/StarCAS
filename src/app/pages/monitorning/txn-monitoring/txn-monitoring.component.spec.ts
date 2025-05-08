import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnMonitoringComponent } from './txn-monitoring.component';

describe('TxnMonitoringComponent', () => {
  let component: TxnMonitoringComponent;
  let fixture: ComponentFixture<TxnMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
