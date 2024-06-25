import { Route03Component } from './route03.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { EventHandlingDemoComponent } from './event-handling-demo/event-handling-demo.component';

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'template-demo',
		url: '/template-demo',
		component: TemplateDemoComponent,
		label: 'Template Demo',
	},
	{
		name: 'event-handling-demo',
		url: '/event-handling-demo',
		component: EventHandlingDemoComponent,
		label: 'Event Handling',
	},
	{
		name: 'route-03',
		url: 'route03',
		component: Route03Component,
		label: 'Route 3',
	},
];
