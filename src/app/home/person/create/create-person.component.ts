import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '@core/store';
import { Person, TitleKeysPerson, KeyTitleType, TypeInput, Planet, PaginationAPI } from 'global';
import { map, filter, tap } from 'rxjs/operators';

@Component({
	selector: 'app-create-person',
	templateUrl: './create-person.component.html',
	styleUrls: [ './create-person.component.scss' ]
})
export class CreatePersonComponent implements OnInit {
	person$: Observable<Person>;
	listPlanet$: Observable<Planet[]>;
	typeInput = TypeInput;
	titleKeysPerson: KeyTitleType[] = TitleKeysPerson;
	formGroup: FormGroup;

	isNew: boolean;
	constructor(private router: Router, private store: Store<fromStore.CoreState>, private cdr: ChangeDetectorRef) {
		this.isNew = this.router.url.includes('create');
	}

	ngOnInit() {
		this.store.dispatch(new fromStore.GetListPlanets());
		this.listPlanet$ = this.store
			.select(fromStore.getPaginationPlanet)
			.pipe(
				filter((pagination: PaginationAPI<Planet>) => !!pagination),
				map((pagination: PaginationAPI<Planet>) => pagination.results)
			);

		if (!this.isNew) {
			this.person$ = this.store
				.select(fromStore.getPersonWithHomeWorld)
				.pipe(tap((person: Person) => this.buildForm(person)));
		} else {
			this.buildForm();
		}
	}

	buildForm(person: Person = null): void {
		this.formGroup = new FormGroup({});
		this.titleKeysPerson.forEach((titleKey: KeyTitleType) => {
			let value: string = '';
			if (person) {
				value = person[titleKey.key];
			} else if (titleKey.type === TypeInput.SELECT) {
				value = titleKey.data[0] || '';
			}
			this.formGroup.addControl(titleKey.key, new FormControl(value, titleKey.type ? Validators.required : []));
		});
		this.cdr.detectChanges();
	}

	goBack() {
		this.router.navigate([ '/persons' ]);
	}

	savePerson() {
		if (this.isNew) {
			this.store.dispatch(new fromStore.CreatePerson(this.formGroup.value));
		} else {
			this.store.dispatch(new fromStore.UpdatePerson(this.formGroup.value));
		}
	}
}
