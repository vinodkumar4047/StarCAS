import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTXNEnabledDisabledComponent } from './international-txn-enabled-disabled.component';

describe('InternationalTXNEnabledDisabledComponent', () => {
  let component: InternationalTXNEnabledDisabledComponent;
  let fixture: ComponentFixture<InternationalTXNEnabledDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalTXNEnabledDisabledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalTXNEnabledDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
