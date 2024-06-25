import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { EventHandlingDemoComponent } from './event-handling-demo/event-handling-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';

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
		name: 'two-way-demo',
		url: '/two-way-demo',
		component: TwoWayDemoComponent,
		label: 'Two-Way Data Binding',
	},
];
