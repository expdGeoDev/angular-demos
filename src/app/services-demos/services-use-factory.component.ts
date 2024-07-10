import { Component } from '@angular/core';

class FactoryProvidedService {
	initializedOn: number;
	message = '';

	constructor(defaultMessage: string) {
		this.initializedOn = Date.now();
		this.message = defaultMessage;
	}
	getMessages() {
		return `FactoryProvidedService: ${this.message}`;
	}
}

function serviceFactory(): FactoryProvidedService {
	return new FactoryProvidedService('customized default message');
}

@Component({
	selector: 'app-services-use-factory',
	standalone: true,
	imports: [],
	providers: [{ provide: FactoryProvidedService, useFactory: serviceFactory }],
	template: `
		<h3>useFactory based service</h3>
		<p>Retrieving messages: {{ messages }}</p>
	`,
	styles: ``,
})
export class ServicesUseFactoryComponent {
	messages = '';

	constructor(private factoryBasedService: FactoryProvidedService) {}

	// noinspection JSUnusedGlobalSymbols
	ngOnInit() {
		this.messages = this.factoryBasedService.getMessages();
	}
}
