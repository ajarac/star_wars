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
				path: 'mylist',
				component: Components.PersonListComponent
			},
			{
				path: 'detail',
				component: Components.PersonDetailComponent
			},
			{
				path: 'create',
				component: Components.CreatePersonComponent
			},
			{
				path: 'edit',
				component: Components.CreatePersonComponent
			}
		]
	},
	{
		path: 'planets',
		children: [
			{
				path: '',
				component: Components.PlanetComponent
			},
			{
				path: 'detail',
				component: Components.PlanetDetailComponent
			}
		]
	}
];
