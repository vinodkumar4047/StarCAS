import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCCBLOCKComponent } from './mcc-block.component';

describe('MCCBLOCKComponent', () => {
  let component: MCCBLOCKComponent;
  let fixture: ComponentFixture<MCCBLOCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MCCBLOCKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCCBLOCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
