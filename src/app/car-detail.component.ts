import { Component, Input } from '@angular/core';

import { Car } from './car';

@Component({
  selector: 'car-detail',
  template: `
    <div *ngIf="car">
      <h2>{{car.plateNumber}} details!</h2>
      <div><label>id: </label>{{car.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="car.plateNumber" placeholder="plateNumber"/>
      </div>
    </div>
  `
})
export class CarDetailComponent {
  @Input() car: Car;
}