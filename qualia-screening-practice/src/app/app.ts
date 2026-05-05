import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TipCalculator} from './tip-calculator';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  billAmount: number | null = null;
  tipPercent: number | null = null;
  numberOfPeople: number | null = null;

  constructor(private tipCalculator: TipCalculator) { }

  get hasError(): boolean {
    return !this.tipCalculator.isValid(this.billAmount, this.tipPercent, this.numberOfPeople);
  }

  get tipAmount(): number {
    return this.tipCalculator.calculateTip(this.billAmount!, this.tipPercent!);
  }

  get totalAmount(): number {
    return this.tipCalculator.calculateTotal(this.billAmount!, this.tipPercent!);
  }

  get tipPerPerson(): number {
    return this.tipCalculator.calculateTipPerPerson(this.billAmount!, this.tipPercent!, this.numberOfPeople!);
  }

  get totalPerPerson(): number {
    return this.tipCalculator.calculateTotalPerPerson(this.billAmount!, this.tipPercent!, this.numberOfPeople!);
  }

  setTip(percent: number) {
    this.tipPercent = percent;
  }

  reset(): void {
    this.billAmount = null;
    this.tipPercent = null;
    this.numberOfPeople = null;
  }
}
