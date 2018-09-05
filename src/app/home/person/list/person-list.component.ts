import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';

import { Person, PaginationAPI } from '@global/models';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
	styleUrls: [ './person-list.component.scss' ]
})
export class PersonListComponent implements OnInit {
	persons$: Observable<PaginationAPI<Person>>;

	constructor(private store: Store<fromStore.CoreState>) {}

	ngOnInit() {
		this.store.dispatch(new fromStore.GetListPersons());
		this.persons$ = this.store.select(fromStore.getPaginationPerson);
	}

	previous(): void {
		this.store.dispatch(new fromStore.GetPreviousPagePersons());
	}

	next(): void {
		this.store.dispatch(new fromStore.GetNextPagePersons());
	}

	showPerson(person: Person): void {
		this.store.dispatch(new fromStore.GetDetailPerson(person));
	}
}
