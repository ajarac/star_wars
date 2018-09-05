import * as fromPlanet from '../actions/planet.action';

import { Planet, PaginationAPI } from '@global/models';

export interface PlanetState {
	pagination: PaginationAPI<Planet>;
	planet: Planet;
}

export const initialState: PlanetState = {
	pagination: null,
	planet: null
};

export function reducer(state: PlanetState = initialState, action: fromPlanet.PlanetType): PlanetState {
	switch (action.type) {
		case fromPlanet.GET_LIST_PLANETS_SUCCESS: {
			const pagination: PaginationAPI<Planet> = action.payload;
			return {
				...state,
				pagination
			};
		}

		case fromPlanet.GET_PLANET_DETAIL_BY_PERSON: {
			return {
				...state,
				planet: null
			};
		}

		case fromPlanet.GET_PLANET_DETAIL_SUCCESS: {
			const planet: Planet = action.payload;
			return {
				...state,
				planet
			};
		}

		default: {
			return state;
		}
	}
}

export const getPaginationPlanet = (state: PlanetState) => state.pagination;
export const getPlanet = (state: PlanetState) => state.planet;
