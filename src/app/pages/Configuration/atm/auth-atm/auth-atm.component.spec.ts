import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAtmComponent } from './auth-atm.component';

describe('AuthAtmComponent', () => {
  let component: AuthAtmComponent;
  let fixture: ComponentFixture<AuthAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAtmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
