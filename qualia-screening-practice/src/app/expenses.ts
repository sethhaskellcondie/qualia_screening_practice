import { Injectable } from '@angular/core';

export type Category = 'work' | 'play' | 'misc';
export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: Category;
  date: Date;
}
export interface Filters {
  category: Category | null;
  startDate: Date | null;
  endDate: Date | null;
}

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private expenses: Expense[] = [];
  private nextId = 1;
  private filters: Filters = {
    category: null,
    startDate: null,
    endDate: null
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(data: Omit<Expense, 'id'>): void {
    this.expenses.push({id: this.nextId++, ...data});
  }

  deleteExpense(id: number): void {
    this.expenses = this.expenses.filter((e) => e.id !== id);
  }

  getVisibleExpenses(): Expense[] {
    return this.expenses.filter(e => {
      if (this.filters.category && e.category !== this.filters.category) {
        return false;
      }
      if (this.filters.startDate && e.date < this.filters.startDate) {
        return false;
      }
      if (this.filters.endDate && e.date > this.filters.endDate) {
        return false;
      }
      return true;
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getRunningTotal(): number {
    return this.getVisibleExpenses().reduce((sum, e) => sum + e.amount, 0);
  }

  setFilters(filters: Partial<Filters>): void {
    this.filters = { ...this.filters, ...filters };
  }

  clearFilters(): void {
    this.filters = { category: null, startDate: null, endDate: null };
  }

  getFilters(): Filters {
    return this.filters;
  }
}
