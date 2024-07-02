import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { routerStates, coffeeRoutes, otherRoutes } from './app.routing';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		importProvidersFrom(
			UIRouterModule.forRoot({ states: [...otherRoutes, ...coffeeRoutes, ...routerStates] })
		),
	],
};
