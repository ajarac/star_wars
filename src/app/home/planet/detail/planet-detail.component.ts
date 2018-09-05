import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '@core/store';
import { Planet } from '@global/models';

@Component({
	selector: 'app-planet-detail',
	templateUrl: 'planet-detail.component.html',
	styleUrls: [ './planet-detail.component.scss' ]
})
export class PlanetDetailComponent implements OnInit {
	planet$: Observable<Planet>;

	constructor(private store: Store<fromStore.CoreState>, private router: Router) {}

	ngOnInit() {
		this.planet$ = this.store.select(fromStore.getPlanetDetail);
	}

	goBack() {
		this.router.navigate([ '/planets' ]);
	}
}
