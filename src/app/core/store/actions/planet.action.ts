import { Action } from '@ngrx/store';
import { PaginationAPI, Planet } from '@global/models';

export const GET_LIST_PLANETS = '[Planet] Get List Planet';
export const GET_LIST_PLANETS_SUCCESS = '[Planet] Get List Planet Success';
export const GET_NEXT_PAGE_PLANET = '[Planet] Get Next Page';
export const GET_PREVIOUS_PAGE_PLANET = '[Planet] Get Previous Page';

export const GET_PLANET_DETAIL_BY_PERSON = '[Planet] Get Planet Detail By Person';
export const GET_PLANET_DETAIL = '[Planet] Get Planet Detail';
export const GET_PLANET_DETAIL_SUCCESS = '[Planet] Get Planet Detail Success';

export class GetListPlanets implements Action {
	readonly type = GET_LIST_PLANETS;
}

export class GetListPlanetsSuccess implements Action {
	readonly type = GET_LIST_PLANETS_SUCCESS;
	constructor(public payload: PaginationAPI<Planet>) {}
}

export class GetPreviousPagePlanet implements Action {
	readonly type = GET_PREVIOUS_PAGE_PLANET;
}

export class GetNextPagePlanet implements Action {
	readonly type = GET_NEXT_PAGE_PLANET;
}

export class GetPlanetDetail implements Action {
	readonly type = GET_PLANET_DETAIL;
	constructor(public payload: string) {}
}

export class GetPlanetDetailByPerson implements Action {
	readonly type = GET_PLANET_DETAIL_BY_PERSON;
	constructor(public payload: string) {}
}
export class GetPlanetDetailSuccess implements Action {
	readonly type = GET_PLANET_DETAIL_SUCCESS;
	constructor(public payload: Planet) {}
}

export type PlanetType =
	| GetListPlanets
	| GetListPlanetsSuccess
	| GetPreviousPagePlanet
	| GetNextPagePlanet
	| GetPlanetDetailByPerson
	| GetPlanetDetailSuccess;
