import { PlanetService } from './planet.service';
import { PersonService } from './person.service';

export const SERVICES = [ PersonService, PlanetService ];

export * from './person.service';
export * from './planet.service';
