import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCOUNTRYBLOCKComponent } from './risk-country-block.component';

describe('RiskCOUNTRYBLOCKComponent', () => {
  let component: RiskCOUNTRYBLOCKComponent;
  let fixture: ComponentFixture<RiskCOUNTRYBLOCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskCOUNTRYBLOCKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskCOUNTRYBLOCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
