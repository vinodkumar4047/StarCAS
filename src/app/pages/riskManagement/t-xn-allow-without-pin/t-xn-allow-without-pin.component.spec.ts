import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TXNALLOWWithoutPINComponent } from './t-xn-allow-without-pin.component';

describe('TXNALLOWWithoutPINComponent', () => {
  let component: TXNALLOWWithoutPINComponent;
  let fixture: ComponentFixture<TXNALLOWWithoutPINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TXNALLOWWithoutPINComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TXNALLOWWithoutPINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
