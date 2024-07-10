// noinspection JSUnusedGlobalSymbols

import { Component } from '@angular/core';

export class UseClassService {
	constructor() {
		console.log('Initialized the UseClassService');
	}

	getMessages() {
		return 'UseClassService: retrieved all messages';
	}
}

export class DifferentUseClassService {
	constructor() {
		console.log('Initialized the DifferentUseClassService');
	}

	getMessages() {
		return 'DifferentUseClassService: retrieved all messages';
	}
}

@Component({
	selector: 'app-services-use-class',
	standalone: true,
	imports: [],
	providers: [{ provide: UseClassService, useClass: UseClassService }],
	template: `
		<h3>useClass based service</h3>
		<p>Retrieving messages: {{ messages }}</p>
	`,
	styles: ``,
})
export class ServicesUseClassComponent {
	messages = '';

	constructor(private classBasedSvc: UseClassService) {}

	ngOnInit() {
		this.messages = this.classBasedSvc.getMessages();
	}
}
