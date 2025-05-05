import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBinComponent } from './external-bin.component';

describe('ExternalBinComponent', () => {
  let component: ExternalBinComponent;
  let fixture: ComponentFixture<ExternalBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
