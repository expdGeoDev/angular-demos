import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

@Component({
	selector: 'app-coffee-container',
	standalone: true,
	imports: [NgForOf, UIRouterModule],
	templateUrl: './coffee-container.component.html',
	styles: ``,
})
export class CoffeeContainerComponent {}
