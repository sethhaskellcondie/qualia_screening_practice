import {Component, signal, ViewChild} from '@angular/core';
import {TemperatureDisplay} from './temperature-display/temperature-display';
import {TemperatureService} from './temperature-service';

@Component({
  selector: 'app-root',
  imports: [TemperatureDisplay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  @ViewChild('temp1') temp1!: TemperatureDisplay;
  @ViewChild('temp2') temp2!: TemperatureDisplay;
  @ViewChild('temp3') temp3!: TemperatureDisplay;

  constructor(private service: TemperatureService) {}

  reset() {
    this.service.reset();
    this.temp1.reset();
    this.temp2.reset();
    this.temp3.reset();
  }
}
