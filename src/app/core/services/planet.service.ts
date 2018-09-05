import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet, PaginationAPI } from 'global';
import { BaseService } from './base.service';

@Injectable()
export class PlanetService extends BaseService {
	constructor(private http: HttpClient) {
		super();
	}

	getPlanetList(page: number = 1): Observable<PaginationAPI<Planet>> {
		const url: string = `${this.URL}planets?page=${page}`;
		return this.http.get<PaginationAPI<Planet>>(url);
	}

	getPlanetListByUrl(url: string): Observable<PaginationAPI<Planet>> {
		return this.http.get<PaginationAPI<Planet>>(url);
	}

	getPLanetByUrl(url: string): Observable<Planet> {
		return this.http.get<Planet>(url);
	}
}
