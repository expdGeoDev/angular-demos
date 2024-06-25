import { Route01Component } from './route01.component';
import { Route02Component } from './route02.component';
import { Route03Component } from './route03.component';

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'route-01',
		url: 'route01',
		component: Route01Component,
		label: 'Route 1',
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
