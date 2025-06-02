import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnAuthorizeComponent } from './txn-authorize.component';

describe('TxnAuthorizeComponent', () => {
  let component: TxnAuthorizeComponent;
  let fixture: ComponentFixture<TxnAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnAuthorizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
