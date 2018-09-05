import { Component, OnInit } from '@angular/core';
import { Planet, PaginationAPI } from 'global';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '@core/store';

@Component({
	selector: 'app-planet',
	templateUrl: './planet.component.html',
	styleUrls: [ './planet.component.scss' ]
})
export class PlanetComponent implements OnInit {
	planets$: Observable<PaginationAPI<Planet>>;

	constructor(private store: Store<fromStore.CoreState>) {}

	ngOnInit() {
		this.store.dispatch(new fromStore.GetListPlanets());
		this.planets$ = this.store.select(fromStore.getPaginationPlanet);
	}

	previous(): void {
		this.store.dispatch(new fromStore.GetPreviousPagePlanet());
	}

	next(): void {
		this.store.dispatch(new fromStore.GetNextPagePlanet());
	}

	showPlanet(planet: Planet): void {
		this.store.dispatch(new fromStore.GetPlanetDetail(planet.url));
	}
}
