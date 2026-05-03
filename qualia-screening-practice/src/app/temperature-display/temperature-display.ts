import {Component, Input} from '@angular/core';
import {TemperatureService} from '../temperature-service';

export type TemperatureScale = 'celsius' | 'fahrenheit' | 'kelvin';

@Component({
  selector: 'app-temperature-display',
  imports: [],
  templateUrl: './temperature-display.html',
  styleUrl: './temperature-display.scss',
})
export class TemperatureDisplay {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() warning: string = '';
  @Input() scale: TemperatureScale = 'celsius';

  showError: boolean = false;

  constructor(public service: TemperatureService) {
  }

  get value(): number | null {
    switch (this.scale) {
      case 'fahrenheit':
        return this.service.getFahrenheit();
      case 'kelvin':
        return this.service.getKelvin();
      default:
        return this.service.getCelsius();
    }
  }

  get showWarning(): boolean {
    return this.value !== null && this.service.isBelowAbsoluteZero();
  }

  onInput(event: Event): void {
    const inputValue: string = (event.target as HTMLInputElement).value;
    // '' converts to 0 when performing Number('') this should be null
    if (inputValue === '') {
      switch (this.scale) {
        case 'fahrenheit': this.service.setFromFahrenheit(null); break;
        case 'kelvin': this.service.setFromKelvin(null); break;
        default: this.service.setFromCelsius(null);
      }
      return;
    }
    const numberValue: number = Number(inputValue);
    if (isNaN(numberValue)) {
      this.showError = true;
      return;
    } else {
      this.showError = false;
      switch (this.scale) {
        case 'fahrenheit': this.service.setFromFahrenheit(numberValue); break;
        case 'kelvin': this.service.setFromKelvin(numberValue); break;
        default: this.service.setFromCelsius(numberValue);
      }
    }
  }

  reset() {
    this.showError = false;
  }
}
