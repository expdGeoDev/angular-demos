import { Component, inject, InjectionToken } from '@angular/core';

export const API_KEY = new InjectionToken('Coffee Bean API Key');

@Component({
	selector: 'app-services-use-value',
	standalone: true,
	imports: [],
	providers: [{ provide: API_KEY, useValue: 'lkasjd0987asdfflojasffp98' }],
	template: `
		<h3>useValue based service</h3>
		<p>API Key: {{ apiKey }}</p>
	`,
	styles: ``,
})
export class ServicesUseValueComponent {
	apiKey = inject(API_KEY);
}
