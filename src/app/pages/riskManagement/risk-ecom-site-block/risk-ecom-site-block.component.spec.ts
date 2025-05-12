import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEcomSiteBLOCKComponent } from './risk-ecom-site-block.component';

describe('RiskEcomSiteBLOCKComponent', () => {
  let component: RiskEcomSiteBLOCKComponent;
  let fixture: ComponentFixture<RiskEcomSiteBLOCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskEcomSiteBLOCKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskEcomSiteBLOCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
