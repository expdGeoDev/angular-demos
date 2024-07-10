import { Component, inject } from '@angular/core';
import { BasicService } from './basic.service';

@Component({
	selector: 'app-services-basic',
	standalone: true,
	imports: [],
	template: `
		<h3>Basic Service</h3>
		<p>Messages retrieved via constructor-injected service: {{ constructorSvcMessages }}</p>
		<p>Messages retrieved via injector-injected service: {{ injectorSvcMessages }}</p>
	`,
	styles: ``,
})
export class ServicesBasicComponent {
	constructorSvcMessages = '';
	injectorSvcMessages = '';

	basicSvcViaInject = inject(BasicService);

	constructor(private basicSvcViaConstructor: BasicService) {}

	// noinspection JSUnusedGlobalSymbols
	ngOnInit() {
		this.constructorSvcMessages = this.basicSvcViaConstructor.getMessages();
		this.injectorSvcMessages = this.basicSvcViaInject.getMessages();
	}
}
