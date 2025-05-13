import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCasetteComponent } from './update-casette.component';

describe('UpdateCasetteComponent', () => {
  let component: UpdateCasetteComponent;
  let fixture: ComponentFixture<UpdateCasetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCasetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCasetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
