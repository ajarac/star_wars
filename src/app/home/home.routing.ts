import { Routes } from '@angular/router';

import * as Components from './index';

export const ROUTER_HOME: Routes = [
	{
		path: '',
		redirectTo: 'persons',
		pathMatch: 'full'
	},
	{
		path: 'persons',
		children: [
			{
				path: '',
				component: Components.PersonListComponent
			},
			{
				path: 'detail',
				component: Components.PersonDetailComponent
			}
		]
	},
	{
    path: 'planets',
    children: [{
      path: '',
      component: Components.PlanetComponent,
    }, {
      path: 'detail',
      component: Components.PlanetDetailComponent
    }]
	}
];
