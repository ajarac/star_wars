import { KeyTitle } from './key-title.model';
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

export enum TypeInput {
	'INPUT' = <any>'INPUT',
	'RADIO' = <any>'RADIO',
	'SELECT' = <any>'SELECT'
}

export interface KeyTitleType extends KeyTitle {
	type: TypeInput;
	data?: string[];
}

const colors = Object.keys(ColorsEnum).map((k) => ColorsEnum[k]);
const genders = Object.keys(GenderEnum).map((k) => GenderEnum[k]);

export const TitleKeysPerson: KeyTitleType[] = [
	{ key: 'id', title: 'ID', type: null },
	{ key: 'name', title: 'Name', type: TypeInput.INPUT },
	{ key: 'height', title: 'Height', type: TypeInput.INPUT },
	{ key: 'mass', title: 'Mass', type: TypeInput.INPUT },
	{ key: 'hair_color', title: 'Hard Color', type: TypeInput.SELECT, data: colors },
	{ key: 'skin_color', title: 'Skin Color', type: TypeInput.INPUT },
	{ key: 'eye_color', title: 'Eye Color', type: TypeInput.SELECT, data: colors },
	{ key: 'birth_year', title: 'Birth year', type: TypeInput.INPUT },
	{ key: 'gender', title: 'Gender', type: TypeInput.RADIO, data: genders },
	{ key: 'homeworld', title: 'Homeworld', type: TypeInput.SELECT, data: [] }
];

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
