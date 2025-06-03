import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMonitoringDetailsComponent } from './control-monitoring-details.component';

describe('ControlMonitoringDetailsComponent', () => {
  let component: ControlMonitoringDetailsComponent;
  let fixture: ComponentFixture<ControlMonitoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlMonitoringDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlMonitoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
