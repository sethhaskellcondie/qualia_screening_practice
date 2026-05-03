import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  private celsiusValue = signal<number | null>(null);

  getCelsius(): number | null {
    return this.celsiusValue();
  }

  getFahrenheit(): number | null {
    const c = this.celsiusValue();
    return c === null ? null : (c * 9/5) + 32;
  }

  getKelvin(): number | null {
    const c = this.celsiusValue();
    return c === null ? null : c + 273.15;
  }

  setFromCelsius(value: number | null) {
    this.celsiusValue.set(value);
  }

  setFromFahrenheit(value: number | null) {
    this.celsiusValue.set(value === null ? null : (value - 32) * 5/9);
  }

  setFromKelvin(value: number | null) {
    this.celsiusValue.set(value === null ? null : value - 273.15);
  }

  isBelowAbsoluteZero(): boolean {
    const c = this.celsiusValue();
    return c !== null && c < -273.15
  }

   reset() {
     this.celsiusValue.set(null);
   }
}
