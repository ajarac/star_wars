import { Action } from '@ngrx/store';
import { PaginationAPI, Person } from '@global/models';

export const GET_LIST_PERSONS = '[Person] Get List Person';
export const GET_LIST_PERSONS_SUCCESS = '[Person] Get List Person Success';
export const GET_NEXT_PAGE_PERSON = '[Person] Get Next Page Person';
export const GET_PREVIOUS_PAGE_PERSON = '[Person] Get Previous Page Person';

export const GET_MY_LIST = '[Person] Get My List';
export const GET_MY_LIST_SUCCESS = '[Person] Get My List Success';

export const GET_DETAIL_PERSON = '[Person] Get Detail Person';
export const GET_DETAIL_PERSON_SUCCESS = '[Person] Get Detail Person Success';

export const CREATE_PERSON = '[Person] Create Person';

export const UPDATE_PERSON = '[Person] Update Person';

export const DELETE_PERSON = '[Person] Delete Person';

export class GetListPersons implements Action {
	readonly type = GET_LIST_PERSONS;
}

export class GetListPersonsSuccess implements Action {
	readonly type = GET_LIST_PERSONS_SUCCESS;
	constructor(public payload: PaginationAPI<Person>) {}
}

export class GetNextPagePersons implements Action {
	readonly type = GET_NEXT_PAGE_PERSON;
}

export class GetPreviousPagePersons implements Action {
	readonly type = GET_PREVIOUS_PAGE_PERSON;
}

export class GetMyList implements Action {
	readonly type = GET_MY_LIST;
}

export class GetMyListSuccess implements Action {
	readonly type = GET_MY_LIST_SUCCESS;
	constructor(public payload: Person[]) {}
}

export class GetDetailPerson implements Action {
	readonly type = GET_DETAIL_PERSON;
	constructor(public payload: Person) {}
}

export class GetDetailPersonSuccess implements Action {
	readonly type = GET_DETAIL_PERSON_SUCCESS;
	constructor(public payload: Person) {}
}

export class CreatePerson implements Action {
	readonly type = CREATE_PERSON;
	constructor(public payload: Person) {}
}

export class UpdatePerson implements Action {
	readonly type = UPDATE_PERSON;
	constructor(public payload: Person) {}
}

export class DeletePerson implements Action {
	readonly type = DELETE_PERSON;
	constructor(public payload: Person) {}
}

export type PersonType =
	| GetListPersons
	| GetListPersonsSuccess
	| GetNextPagePersons
	| GetPreviousPagePersons
	| GetMyList
	| GetMyListSuccess
	| GetDetailPerson
	| GetDetailPersonSuccess
	| CreatePerson
	| UpdatePerson
	| DeletePerson;
