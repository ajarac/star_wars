import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '@core/store';
import { Person } from 'global';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.scss' ]
})
export class EditComponent implements OnInit {
	person$: Observable<Person>;

	fromGroup: FormGroup;
	isNew: boolean;

	constructor(private router: Router, private store: Store<fromStore.CoreState>) {}

	ngOnInit() {
		this.person$ = this.store.select(fromStore.getPerson).pipe(tap((person: Person) => this.buildForm(person)));
	}

	buildForm(person: Person): void {
		this.isNew = !!person;
	}

	goBack() {
		this.router.navigate([ '/persons' ]);
	}
}
