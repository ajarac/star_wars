import { Planet, Person } from '@global/models';
import { getPlanetDetail } from './planet.selector';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPerson from '../reducers/person.reducer';

export const personsState = createFeatureSelector<fromPerson.PersonState>('persons');

export const getPaginationPerson = createSelector(personsState, fromPerson.getPagination);
export const getPerson = createSelector(personsState, fromPerson.getPerson);

export const getPersonWithHomeWorld = createSelector(getPerson, getPlanetDetail, (person: Person, planet: Planet) => {
	if (planet) {
		person.homeworld = planet.name;
	}
	return person;
});

export const getMyPersonList = createSelector(personsState, fromPerson.getMyList);
