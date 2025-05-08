import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSMMonitoringComponent } from './hsm-monitoring.component';

describe('HSMMonitoringComponent', () => {
  let component: HSMMonitoringComponent;
  let fixture: ComponentFixture<HSMMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSMMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSMMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
