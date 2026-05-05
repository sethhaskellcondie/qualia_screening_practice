import { Component, signal } from '@angular/core';
import {NewExpenseForm} from './new-expense-form/new-expense-form';
import {ExpenseListComponent} from './expense-list/expense-list';

@Component({
  selector: 'app-root',
  imports: [
    NewExpenseForm,
    ExpenseListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected message = signal('Hello Qualia');

  updateMessage() {
    this.message.set('This is Seth Condie');
  }
}
