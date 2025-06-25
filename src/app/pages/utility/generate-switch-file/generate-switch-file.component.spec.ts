import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSwitchFileComponent } from './generate-switch-file.component';

describe('GenerateSwitchFileComponent', () => {
  let component: GenerateSwitchFileComponent;
  let fixture: ComponentFixture<GenerateSwitchFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateSwitchFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateSwitchFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
