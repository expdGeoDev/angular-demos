import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { EventHandlingDemoComponent } from './event-handling-demo/event-handling-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { InterativeDemoComponent } from './interative-demo/interative-demo.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { CustomGreetingComponent } from './custom-greeting/custom-greeting.component';
import { AddCoffeeFormComponent } from './coffee-container/add-coffee-form/add-coffee-form.component';
import { DemosContainerComponent } from './demos-container.component';
import { CoffeeContainerComponent } from './coffee-container/coffee-container.component';

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'angularDemos.template-demo',
		url: '/template-demo',
		component: TemplateDemoComponent,
		label: 'Template Demo',
	},
	{
		name: 'angularDemos.event-handling-demo',
		url: '/event-handling-demo',
		component: EventHandlingDemoComponent,
		label: 'Event Handling',
	},
	{
		name: 'angularDemos.input-demo',
		url: '/input-demo',
		component: InputDemoComponent,
		label: '@Input()',
	},
	{
		name: 'angularDemos.output-demo',
		url: '/output-demo',
		component: OutputDemoComponent,
		label: '@Output()',
	},
	{
		name: 'angularDemos.two-way-demo',
		url: '/two-way-demo',
		component: TwoWayDemoComponent,
		label: 'Two-Way Data Binding',
	},
	{
		name: 'angularDemos.iterative-demo',
		url: '/iterative-demo',
		component: InterativeDemoComponent,
		label: 'Iterating over data',
	},
	{
		name: 'angularDemos.services-demo',
		url: '/services-demo',
		component: ServicesDemoComponent,
		label: 'Services',
	},
	{
		name: 'angularDemos.http-client-demo',
		url: '/http-client-demo',
		component: HttpClientDemoComponent,
		label: 'Http Client',
	},
	{
		name: 'angularDemos.custom-greeting',
		url: '/greeting',
		component: CustomGreetingComponent,
		label: 'Our custom component',
	},
];

export const coffeeRoutes = [
	{
		name: 'coffeeApp',
		url: '/coffee-app',
		component: CoffeeContainerComponent,
	},
	{
		name: 'coffeeApp.addCoffeeForm',
		url: '/add-coffee',
		component: AddCoffeeFormComponent,
	},
];

export const otherRoutes = [
	{
		name: 'angularDemos',
		url: '/angular-demos',
		component: DemosContainerComponent,
	},
];
