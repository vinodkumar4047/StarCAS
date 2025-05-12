import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnAllowBlockedMCCComponent } from './txn-allow-blocked-mcc.component';

describe('TxnAllowBlockedMCCComponent', () => {
  let component: TxnAllowBlockedMCCComponent;
  let fixture: ComponentFixture<TxnAllowBlockedMCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnAllowBlockedMCCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnAllowBlockedMCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
