import { PERSON_COMPONENTS } from './person/';
import { PLANET_COMPONENTS } from './planet';

export const COMPONENTS = [ ...PERSON_COMPONENTS, ...PLANET_COMPONENTS ];

export * from './person/';
export * from './planet/';
