import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnAllowedRiskCountryComponent } from './txn-allowed-risk-country.component';

describe('TxnAllowedRiskCountryComponent', () => {
  let component: TxnAllowedRiskCountryComponent;
  let fixture: ComponentFixture<TxnAllowedRiskCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnAllowedRiskCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnAllowedRiskCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
