import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-input-child',
	standalone: true,
	imports: [],
	templateUrl: './input-child.component.html',
	styles: `
		div {
			border: 2px dotted red;
			padding: 2vh;
		}
	`,
})
export class InputChildComponent {
	@Input()
	personName = '';
}
