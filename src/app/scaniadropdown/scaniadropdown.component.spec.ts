import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaniadropdownComponent } from './scaniadropdown.component';

describe('ScaniadropdownComponent', () => {
  let component: ScaniadropdownComponent;
  let fixture: ComponentFixture<ScaniadropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaniadropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaniadropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
