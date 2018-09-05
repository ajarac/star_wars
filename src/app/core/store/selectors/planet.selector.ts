import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPlanet from '../reducers/planet.reducer';

export const planetState = createFeatureSelector<fromPlanet.PlanetState>('planets');

export const getPaginationPlanet = createSelector(planetState, fromPlanet.getPaginationPlanet);
export const getPlanetDetail = createSelector(planetState, fromPlanet.getPlanet);
