import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUpdateComponent } from './mobile-update.component';

describe('MobileUpdateComponent', () => {
  let component: MobileUpdateComponent;
  let fixture: ComponentFixture<MobileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
