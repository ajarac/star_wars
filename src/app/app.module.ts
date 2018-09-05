import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeModule } from './home/home.module';
import { ROUTES_APP } from './app.routing';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, RouterModule.forRoot(ROUTES_APP), CoreModule, SharedModule, UiModule, HomeModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
