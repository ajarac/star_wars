import { NgModule, Optional, SkipSelf } from '@angular/core';

import * as fromCore from './index';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		HttpClientModule,
		StoreModule.forRoot(fromCore.coreState),
		EffectsModule.forRoot(fromCore.EFFECTS),
		RouterModule
	],
	providers: [ ...fromCore.SERVICES ]
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
