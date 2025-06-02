import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAuthComponent } from './risk-auth.component';

describe('RiskAuthComponent', () => {
  let component: RiskAuthComponent;
  let fixture: ComponentFixture<RiskAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
