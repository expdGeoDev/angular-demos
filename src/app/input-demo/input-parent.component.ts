import { Component } from '@angular/core';
import { InputChildComponent } from './input-child.component';

@Component({
	selector: 'app-input-parent',
	standalone: true,
	imports: [InputChildComponent],
	templateUrl: './input-parent.component.html',
	styles: `
		div {
			border: 2px dashed green;
			padding: 2vh;
		}
	`,
})
export class InputParentComponent {
	person = {
		firstName: 'Jack',
		lastName: 'Walsh',
		city: 'Chicago',
		state: 'Illinois',
	};
}
