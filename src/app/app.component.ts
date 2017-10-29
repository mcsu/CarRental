import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
   	<a routerLink="/cars">Cars</a>
	</nav>
   	<router-outlet></router-outlet>
	`
})

export class AppComponent{

  title = 'Car Rental';

}