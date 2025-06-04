import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudRiskDbComponent } from './fraud-risk-db.component';

describe('FraudRiskDbComponent', () => {
  let component: FraudRiskDbComponent;
  let fixture: ComponentFixture<FraudRiskDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudRiskDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudRiskDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
