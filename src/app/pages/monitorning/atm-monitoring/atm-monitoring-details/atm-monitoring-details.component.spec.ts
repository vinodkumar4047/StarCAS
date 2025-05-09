import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmMonitoringDetailsComponent } from './atm-monitoring-details.component';

describe('AtmMonitoringDetailsComponent', () => {
  let component: AtmMonitoringDetailsComponent;
  let fixture: ComponentFixture<AtmMonitoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmMonitoringDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmMonitoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
