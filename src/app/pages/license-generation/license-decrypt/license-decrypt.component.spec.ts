import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDecryptComponent } from './license-decrypt.component';

describe('LicenseDecryptComponent', () => {
  let component: LicenseDecryptComponent;
  let fixture: ComponentFixture<LicenseDecryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseDecryptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
