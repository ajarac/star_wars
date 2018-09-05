import { NgModule } from '@angular/core';

import * as Components from './index';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
	imports: [ SharedModule, HttpClientModule, NgProgressModule.forRoot(), NgProgressHttpModule ],
	declarations: [ ...Components.COMPONENTS ],
	exports: [ Components.LayoutComponent ]
})
export class UiModule {}
