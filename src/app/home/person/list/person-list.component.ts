import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
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
	isMyList: boolean;

	constructor(private store: Store<fromStore.CoreState>, private router: Router) {
		this.isMyList = this.router.url.includes('mylist');
	}

	ngOnInit() {
		if (this.isMyList) {
			this.store.dispatch(new fromStore.GetMyList());
			this.persons$ = this.store
				.select(fromStore.getMyPersonList)
				.pipe(map((persons: Person[]) => ({ results: persons } as PaginationAPI<Person>)));
		} else {
			this.store.dispatch(new fromStore.GetListPersons());
			this.persons$ = this.store.select(fromStore.getPaginationPerson);
		}
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

	createPerson() {
		this.store.dispatch(new fromStore.GetDetailPersonSuccess(null));
		this.router.navigate([ '/persons', 'create' ]);
	}

	editPerson(person: Person): void {
		this.store.dispatch(new fromStore.GetDetailPerson(person));
		this.router.navigate([ '/persons', 'edit' ]);
	}

	deletePerson(person: Person): void {
		if (confirm(`Do you want to delete ${person.name}?`)) {
			this.store.dispatch(new fromStore.DeletePerson(person));
		}
	}
}
