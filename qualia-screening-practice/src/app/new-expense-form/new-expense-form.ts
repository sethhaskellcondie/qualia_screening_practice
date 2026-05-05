import {Component, OnInit} from '@angular/core';
import {Category, ExpensesService} from '../expenses';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-expense-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-expense-form.html',
  styleUrl: './new-expense-form.scss',
})
export class NewExpenseForm implements OnInit {
  categories: Category[] = ['work', 'play', 'misc'];
  submitted = false;

  form = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl< number | null>(null, [Validators.required, Validators.min(0.01)]),
    category: new FormControl<Category | null>(null, Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.form.controls.date.setValue(this.getTodayString());
  }

  getTodayString(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const {description, amount, category, date} = this.form.value;

    this.expensesService.addExpense({
      description: description!,
      amount: amount!,
      category: category!,
      date: new Date(date + 'T00:00:00'),
    });

    this.submitted = false;
    this.form.reset();
    this.form.controls.date.setValue(this.getTodayString());
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && this.submitted);
  }
}
