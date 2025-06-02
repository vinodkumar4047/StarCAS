import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnAllowedRiskAuthComponent } from './txn-allowed-risk-auth.component';

describe('TxnAllowedRiskAuthComponent', () => {
  let component: TxnAllowedRiskAuthComponent;
  let fixture: ComponentFixture<TxnAllowedRiskAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnAllowedRiskAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnAllowedRiskAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
