import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';
import { Person, Planet, KeyTitleType, TitleKeysPerson } from 'global';

@Component({
	selector: 'app-person-detail',
	templateUrl: './person-detail.component.html',
	styleUrls: [ './person-detail.component.scss' ]
})
export class PersonDetailComponent implements OnInit, OnDestroy {
	person$: Observable<Person>;
  titleKeysPerson: KeyTitleType[] = TitleKeysPerson;

	constructor(private store: Store<fromStore.CoreState>, private router: Router) {}

	ngOnInit() {
		this.person$ = this.store.select(fromStore.getPersonWithHomeWorld);
	}

	ngOnDestroy() {
		this.store.dispatch(new fromStore.GetPlanetDetailSuccess(null));
	}

	goBack() {
		this.router.navigate([ '/persons' ]);
	}
}
