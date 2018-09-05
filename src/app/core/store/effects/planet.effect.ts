import { Router } from '@angular/router';
import { Planet, PaginationAPI } from '@global/models';
import { Injectable } from '@angular/core';
import { PlanetService } from '@core/services/planet.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom } from 'rxjs/operators';

import { Store, Action } from '@ngrx/store';

import { CoreState } from '../reducers';
import * as planetActions from '../actions/planet.action';
import * as fromSelectors from '../selectors';

@Injectable()
export class PlanetEffect {
	constructor(
		private actions$: Actions,
		private planetService: PlanetService,
		private store: Store<CoreState>,
		private router: Router
	) {}

	@Effect()
	getPaginationPlanet$ = this.actions$.pipe(
		ofType(planetActions.GET_LIST_PLANETS),
		mergeMap(() =>
			this.planetService
				.getPlanetList()
				.pipe(map((pagination: PaginationAPI<Planet>) => new planetActions.GetListPlanetsSuccess(pagination)))
		)
	);

	@Effect()
	getNextPreviousPagination$ = this.actions$.pipe(
		ofType(planetActions.GET_NEXT_PAGE_PLANET, planetActions.GET_PREVIOUS_PAGE_PLANET),
		withLatestFrom(
			this.store.select(fromSelectors.getPaginationPlanet),
			(action: Action, pagination: PaginationAPI<Planet>) => ({
				action,
				pagination
			})
		),
		mergeMap(({ pagination, action }: { pagination: PaginationAPI<Planet>; action: Action }) => {
			let url: string;
			if (action.type === planetActions.GET_NEXT_PAGE_PLANET) {
				url = pagination.next;
			} else {
				url = pagination.previous;
			}
			return this.planetService
				.getPlanetListByUrl(url)
				.pipe(
					map(
						(newPagination: PaginationAPI<Planet>) => new planetActions.GetListPlanetsSuccess(newPagination)
					)
				);
		})
	);

	@Effect()
	getPlanetDetail$ = this.actions$.pipe(
		ofType(planetActions.GET_PLANET_DETAIL_BY_PERSON, planetActions.GET_PLANET_DETAIL),
		mergeMap((action: { type: string; payload: string }) =>
			this.planetService.getPLanetByUrl(action.payload).pipe(
				map((planet: Planet) => {
					if (action.type === planetActions.GET_PLANET_DETAIL) {
						this.router.navigate([ '/planets', 'detail' ]);
					}
					return new planetActions.GetPlanetDetailSuccess(planet);
				})
			)
		)
	);
}
