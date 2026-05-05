import { Component } from '@angular/core';
import {Category, Expense, ExpensesService, Filters} from '../expenses';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  imports: [
    CurrencyPipe,
    DatePipe,
    FormsModule
  ],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.scss',
})
export class ExpenseListComponent {
  categories: Category[] = ['work', 'play', 'misc'];

  filterCategory: Category | null = null;
  filterStartDate: string = '';
  filterEndDate: string = '';

  constructor(public expensesService: ExpensesService) {
  }

  get expenses(): Expense[] {
    return this.expensesService.getExpenses();
  }

  get runningTotal(): number {
    return this.expensesService.getRunningTotal();
  }

  get activeFilters(): Filters {
    return this.expensesService.getFilters();
  }

  get hasActiveFilters(): boolean {
    const f = this.activeFilters;
    return f.category !== null || f.startDate !== null || f.endDate !== null;
  }

  delete(id: number): void {
    this.expensesService.deleteExpense(id);
  }

  applyFilters(): void {
    this.expensesService.setFilters({
      category: this.filterCategory,
      startDate: this.filterStartDate ? new Date(this.filterStartDate + 'T00:00:00') : null,
      endDate: this.filterEndDate ? new Date(this.filterEndDate + 'T00:00:00') : null,
    });
  }

  clearFilters(): void {
    this.filterCategory = null;
    this.filterStartDate = '';
    this.filterEndDate = '';
    this.expensesService.clearFilters();
  }
}
