import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfflinePinConfigComponent } from './add-offline-pin-config.component';

describe('AddOfflinePinConfigComponent', () => {
  let component: AddOfflinePinConfigComponent;
  let fixture: ComponentFixture<AddOfflinePinConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOfflinePinConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfflinePinConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
