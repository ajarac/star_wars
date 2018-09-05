import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

import { Person, PaginationAPI } from '@global/models';

@Injectable()
export class PersonService extends BaseService {
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

	getPersonByUrl(url: string): Observable<Person> {
		return this.http.get<Person>(url);
	}
}
