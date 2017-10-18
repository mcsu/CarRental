import { Component } from '@angular/core';

import { Car } from './car';
 
const CARS: Car[] = [
  { id: 11, plateNumber: 'AA 22 BB' },
  { id: 12, plateNumber: 'CC 33 DD' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Rental';
  cars = CARS;
  selectedCar: Car;
 
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}