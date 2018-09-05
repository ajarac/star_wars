import { Router } from '@angular/router';
import { PaginationAPI, Person } from 'global';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom } from 'rxjs/operators';

import { CoreState } from '../reducers';
import * as personActions from '../actions/person.action';
import * as planetActions from '../actions/planet.action';
import * as fromSelectors from '../selectors';
import { PersonService } from '@core/services';
import { from } from 'rxjs';

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
	getPersonById$ = this.actions$.pipe(
		ofType(personActions.GET_DETAIL_PERSON),
		map((action: personActions.GetDetailPerson) => action.payload),
		mergeMap((person: Person) =>
			this.personService.getPersonByUrl(person.url).pipe(
				mergeMap((p: Person) => {
					this.router.navigate([ '/persons', 'detail' ]);
					return from([
						new personActions.GetPersonByIdSuccess(p),
						new planetActions.GetPlanetDetailByPerson(p.homeworld)
					]);
				})
			)
		)
	);
}
