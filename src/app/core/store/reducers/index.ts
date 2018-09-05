import { ActionReducerMap } from '@ngrx/store';
import * as fromPerson from './person.reducer';
import * as fromPlanet from './planet.reducer';

export interface CoreState {
	persons: fromPerson.PersonState;
	planets: fromPlanet.PlanetState;
}

export const coreState: ActionReducerMap<CoreState> = {
	persons: fromPerson.reducer,
	planets: fromPlanet.reducer
};
