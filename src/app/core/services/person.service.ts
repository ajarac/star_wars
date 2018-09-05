import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

import { Person, PaginationAPI } from '@global/models';

@Injectable()
export class PersonService extends BaseService {
	urlTest: string = 'http://159.65.113.192/';

	constructor(private http: HttpClient) {
		super();
	}

	getPersonList(page: number = 1): Observable<PaginationAPI<Person>> {
		const url: string = `${this.URL}people?page=${page}`;
		return this.http.get<PaginationAPI<Person>>(url);
	}

	getPersonListByUrl(url: string): Observable<PaginationAPI<Person>> {
		return this.http.get<PaginationAPI<Person>>(url);
	}

	getMyList(): Observable<Person[]> {
		const url: string = `${this.urlTest}people`;
		return this.http.get<Person[]>(url);
	}

	getPersonByUrl(url: string): Observable<Person> {
		return this.http.get<Person>(url);
	}

	getPersonById(id: number): Observable<Person> {
		const url: string = `${this.urlTest}people/${id}`;
		return this.http.get<Person>(url);
	}

	createPerson(person: Person): Observable<any> {
		const url: string = `${this.urlTest}people`;
		return this.http.post<any>(url, person);
	}

	updatePerson(person: Person): Observable<any> {
		const url: string = `${this.urlTest}people/${person.id}`;
		return this.http.put<any>(url, person);
	}

	deletePerson(person: Person): Observable<any> {
		const url: string = `${this.urlTest}people/${person.id}`;
		return this.http.delete<any>(url);
	}
}
