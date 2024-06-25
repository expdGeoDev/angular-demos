import { Route01Component } from './route01.component';
import { Route02Component } from './route02.component';
import { Route03Component } from './route03.component';

export const routerStates = [
	{
		name: 'route01',
		url: '/route01',
		component: Route01Component,
	},
	{
		name: 'route02',
		url: '/route02',
		component: Route02Component,
	},
	{
		name: 'route03',
		url: '/route03',
		component: Route03Component,
	},
];
