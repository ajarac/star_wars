import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';
import { Person, Planet } from 'global';

@Component({
	selector: 'app-person-detail',
	templateUrl: './person-detail.component.html',
	styleUrls: [ './person-detail.component.scss' ]
})
export class PersonDetailComponent implements OnInit {
	person$: Observable<Person>;
	planet$: Observable<Planet>;

	constructor(private store: Store<fromStore.CoreState>, private router: Router) {}

	ngOnInit() {
		this.person$ = this.store.select(fromStore.getPerson);
		this.planet$ = this.store.select(fromStore.getPlanetDetail);
	}

	goBack() {
		this.router.navigate([ '/persons' ]);
	}
}
