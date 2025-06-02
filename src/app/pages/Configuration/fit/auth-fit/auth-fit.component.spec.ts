import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFitComponent } from './auth-fit.component';

describe('AuthFitComponent', () => {
  let component: AuthFitComponent;
  let fixture: ComponentFixture<AuthFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
