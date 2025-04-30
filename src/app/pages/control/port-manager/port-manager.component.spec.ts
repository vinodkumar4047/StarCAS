import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortManagerComponent } from './port-manager.component';

describe('PortManagerComponent', () => {
  let component: PortManagerComponent;
  let fixture: ComponentFixture<PortManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
