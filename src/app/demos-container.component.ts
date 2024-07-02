import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { routerStates } from './app.routing';

@Component({
	selector: 'app-demos-container',
	standalone: true,
	imports: [NgForOf, UIRouterModule],
	templateUrl: './demos-container.component.html',
	styles: ``,
})
export class DemosContainerComponent {
	protected readonly routerStates = routerStates;
}
