import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
   	<a routerLink="/cars">Rent a car</a>
	</nav>
   	<router-outlet></router-outlet>
	`
})

export class AppComponent {

  title = 'Car Rental Service';

}
