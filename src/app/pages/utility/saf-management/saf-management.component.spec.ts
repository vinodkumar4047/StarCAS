import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafManagementComponent } from './saf-management.component';

describe('SafManagementComponent', () => {
  let component: SafManagementComponent;
  let fixture: ComponentFixture<SafManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
