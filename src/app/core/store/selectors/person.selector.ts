import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPerson from '../reducers/person.reducer';

export const personsState = createFeatureSelector<fromPerson.PersonState>('persons');

export const getPaginationPerson = createSelector(personsState, fromPerson.getPagination);
export const getPerson = createSelector(personsState, fromPerson.getPerson);
