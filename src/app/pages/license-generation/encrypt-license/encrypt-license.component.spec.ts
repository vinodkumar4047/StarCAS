import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptLicenseComponent } from './encrypt-license.component';

describe('EncryptLicenseComponent', () => {
  let component: EncryptLicenseComponent;
  let fixture: ComponentFixture<EncryptLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncryptLicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
