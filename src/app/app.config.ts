import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { routerStates } from './app.routing';

export const appConfig: ApplicationConfig = {
	providers: [importProvidersFrom(UIRouterModule.forRoot({ states: routerStates }))],
};
