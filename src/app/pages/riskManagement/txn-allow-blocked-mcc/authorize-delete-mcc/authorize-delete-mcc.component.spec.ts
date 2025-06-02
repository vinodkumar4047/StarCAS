import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeDeleteMCCComponent } from './authorize-delete-mcc.component';

describe('AuthorizeDeleteMCCComponent', () => {
  let component: AuthorizeDeleteMCCComponent;
  let fixture: ComponentFixture<AuthorizeDeleteMCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizeDeleteMCCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeDeleteMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
