import * as fromPerson from '../actions/person.action';
import { Person, PaginationAPI } from '@global/models';

export interface PersonState {
	pagination: PaginationAPI<Person>;
	person: Person;
}

export const initialState: PersonState = {
	pagination: null,
	person: null
};

export function reducer(state: PersonState = initialState, action: fromPerson.PersonType): PersonState {
	switch (action.type) {
		case fromPerson.GET_LIST_PERSONS_SUCCESS: {
			const pagination: PaginationAPI<Person> = action.payload;
			return {
				...state,
				pagination
			};
		}

		case fromPerson.GET_DETAIL_PERSON: {
			return {
				...state,
				person: null
			};
		}

		case fromPerson.GET_DETAIL_PERSON_SUCCESS: {
			const person: Person = action.payload;
			return {
				...state,
				person
			};
		}

		default: {
			return state;
		}
	}
}

export const getPagination = (state: PersonState) => state.pagination;
export const getPerson = (state: PersonState) => state.person;
