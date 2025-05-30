import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthExternalBinComponent } from './auth-external-bin.component';

describe('AuthExternalBinComponent', () => {
  let component: AuthExternalBinComponent;
  let fixture: ComponentFixture<AuthExternalBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthExternalBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthExternalBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
