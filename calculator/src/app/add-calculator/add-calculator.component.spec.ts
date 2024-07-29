import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculatorComponent } from './add-calculator.component';

describe('AddCalculatorComponent', () => {
  let component: AddCalculatorComponent;
  let fixture: ComponentFixture<AddCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
