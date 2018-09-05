import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTER_HOME } from './home.routing';

import { COMPONENTS } from './index';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	imports: [ SharedModule, RouterModule.forChild(ROUTER_HOME), FormsModule ],
	declarations: [ ...COMPONENTS,  ]
})
export class HomeModule {}
