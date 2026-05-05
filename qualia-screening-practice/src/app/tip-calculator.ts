import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TipCalculator {
  isValid(billAmount: number | null, tipPercent: number | null, numberOfPeople: number | null): boolean {
    if (billAmount === null || billAmount <= 0) {
      return false;
    }
    if (tipPercent === null || tipPercent <= 0) {
      return false;
    }
    if (numberOfPeople === null || numberOfPeople <= 0 || !Number.isInteger(numberOfPeople)) {
      return false;
    }
    return true;
  }

  calculateTip(billAmount: number, tipPercent: number): number {
    return billAmount * (tipPercent / 100);
  }

  calculateTotal(billAmount: number, tipPercent: number): number {
    return billAmount + this.calculateTip(billAmount, tipPercent);
  }

  calculateTipPerPerson(billAmount: number, tipPercent: number, numberOfPeople: number): number {
    return this.calculateTip(billAmount, tipPercent) / numberOfPeople;
  }

  calculateTotalPerPerson(billAmount: number, tipPercent: number, numberOfPeople: number): number {
    return billAmount / numberOfPeople;
  }
}
