import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMonitoringComponent } from './control-monitoring.component';

describe('ControlMonitoringComponent', () => {
  let component: ControlMonitoringComponent;
  let fixture: ComponentFixture<ControlMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
