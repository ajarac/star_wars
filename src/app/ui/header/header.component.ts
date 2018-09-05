import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
	buttons: { router: string[]; title: string }[] = [
		{
			router: [ '/persons' ],
			title: 'Persons'
		},
		{
			router: [ '/planets' ],
			title: 'Planets'
		}
	];
}
