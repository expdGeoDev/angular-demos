import { Route02Component } from './route02.component';
import { Route03Component } from './route03.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'template-demo',
		url: 'template-demo',
		component: TemplateDemoComponent,
		label: 'Template Demo',
	},
	{
		name: 'route-02',
		url: 'route02',
		component: Route02Component,
		label: 'Route 2',
	},
	{
		name: 'route-03',
		url: 'route03',
		component: Route03Component,
		label: 'Route 3',
	},
];
