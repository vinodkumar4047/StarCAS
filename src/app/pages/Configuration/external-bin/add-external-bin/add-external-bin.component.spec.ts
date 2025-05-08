import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExternalBinComponent } from './add-external-bin.component';

describe('AddExternalBinComponent', () => {
  let component: AddExternalBinComponent;
  let fixture: ComponentFixture<AddExternalBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExternalBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExternalBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
