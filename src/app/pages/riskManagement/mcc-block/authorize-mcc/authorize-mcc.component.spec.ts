import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeMCCComponent } from './authorize-mcc.component';

describe('AuthorizeMCCComponent', () => {
  let component: AuthorizeMCCComponent;
  let fixture: ComponentFixture<AuthorizeMCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizeMCCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
