import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeEcomsiteComponent } from './authorize-ecomsite.component';

describe('AuthorizeEcomsiteComponent', () => {
  let component: AuthorizeEcomsiteComponent;
  let fixture: ComponentFixture<AuthorizeEcomsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizeEcomsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeEcomsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
