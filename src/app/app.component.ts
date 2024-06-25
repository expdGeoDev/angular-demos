import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true,
	imports: [UIRouterModule],
})
export class AppComponent {
	title = 'angular-demos';
}
