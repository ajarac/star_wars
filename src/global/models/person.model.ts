export enum ColorsEnum {
	'Black' = <any>'Black',
	'Brown' = <any>'Brown',
	'Blue' = <any>'Blue',
	'White' = <any>'White'
}

export enum GenderEnum {
	'Male' = <any>'Male',
	'Female' = <any>'Female'
}

export interface Person {
	id: number;
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: any;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}
