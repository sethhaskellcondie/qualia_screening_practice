import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpenseForm } from './new-expense-form';

describe('NewExpenseForm', () => {
  let component: NewExpenseForm;
  let fixture: ComponentFixture<NewExpenseForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewExpenseForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NewExpenseForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
