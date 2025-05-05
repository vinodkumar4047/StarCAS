import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CASSETComponent } from './casset.component';

describe('CASSETComponent', () => {
  let component: CASSETComponent;
  let fixture: ComponentFixture<CASSETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CASSETComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CASSETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
