import { Router } from '@angular/router';
import { PaginationAPI, Person } from 'global';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { CoreState } from '../reducers';
import * as personActions from '../actions/person.action';
import * as planetActions from '../actions/planet.action';
import * as fromSelectors from '../selectors';
import { PersonService } from '@core/services';
import { from, Observable } from 'rxjs';

@Injectable()
export class PersonEffect {
	constructor(
		private actions$: Actions,
		private personService: PersonService,
		private store: Store<CoreState>,
		private router: Router
	) {}

	@Effect()
	getPaginationPerson$ = this.actions$.pipe(
		ofType(personActions.GET_LIST_PERSONS),
		mergeMap(() =>
			this.personService
				.getPersonList()
				.pipe(map((pagination: PaginationAPI<Person>) => new personActions.GetListPersonsSuccess(pagination)))
		)
	);

	@Effect()
	getNextPreviousPagination$ = this.actions$.pipe(
		ofType(personActions.GET_NEXT_PAGE_PERSON, personActions.GET_PREVIOUS_PAGE_PERSON),
		withLatestFrom(
			this.store.select(fromSelectors.getPaginationPerson),
			(action: Action, pagination: PaginationAPI<Person>) => ({
				action,
				pagination
			})
		),
		mergeMap(({ pagination, action }: { pagination: PaginationAPI<Person>; action: Action }) => {
			let url: string;
			if (action.type === personActions.GET_NEXT_PAGE_PERSON) {
				url = pagination.next;
			} else {
				url = pagination.previous;
			}
			return this.personService
				.getPersonListByUrl(url)
				.pipe(
					map(
						(newPagination: PaginationAPI<Person>) => new personActions.GetListPersonsSuccess(newPagination)
					)
				);
		})
	);

	@Effect()
	getMyList$ = this.actions$.pipe(
		ofType(personActions.GET_MY_LIST),
		mergeMap(() =>
			this.personService.getMyList().pipe(map((persons: Person[]) => new personActions.GetMyListSuccess(persons)))
		)
	);

	@Effect()
	getPersonById$ = this.actions$.pipe(
		ofType(personActions.GET_DETAIL_PERSON),
		map((action: personActions.GetDetailPerson) => action.payload),
		mergeMap((person: Person) => {
			let observable: Observable<Person>;
			if (person.url) {
				observable = this.personService.getPersonByUrl(person.url);
			} else {
				observable = this.personService.getPersonById(person.id);
			}
			return observable.pipe(
				mergeMap((p: Person) => {
					const actions: Action[] = [ new personActions.GetDetailPersonSuccess(p) ];
					if (person.url) {
						this.router.navigate([ '/persons', 'detail' ]);
						actions.push(new planetActions.GetPlanetDetailByPerson(p.homeworld));
					}
					return from(actions);
				})
			);
		})
	);

	@Effect({ dispatch: false })
	createPerson$ = this.actions$.pipe(
		ofType(personActions.CREATE_PERSON, personActions.UPDATE_PERSON, personActions.DELETE_PERSON),
		mergeMap(({ type, payload }: { type: string; payload: Person }) => {
			let observable: Observable<any>;
			switch (type) {
				case personActions.CREATE_PERSON:
					observable = this.personService.createPerson(payload);
					break;
				case personActions.UPDATE_PERSON:
					observable = this.personService.updatePerson(payload);
					break;
				case personActions.DELETE_PERSON:
					observable = this.personService
						.deletePerson(payload)
						.pipe(tap(() => this.store.dispatch(new personActions.GetMyList())));
					break;
			}
			return observable.pipe(tap(() => this.router.navigate([ '/persons', 'mylist' ])));
		})
	);
}
