export interface PaginationAPI<T> {
	count: number;
	next: string;
	previous: string;
	results: T[];
	page: number;
}
/*
export interface PaginationModel<T> {
	results: T[];
	itemsPerPage: number;
	currentPage: number;
	totalItems: number;
}

export class Pagination<T> implements PaginationModel<T> {
	private _results: T[];
	private _itemsPerPage: number;
	private _currentPage: number;
	private _totalItems: number;

	constructor(pagination: PaginationAPI) {
		this._currentPage = pagination.page;
		this._results = pagination.results;
		this._totalItems = pagination.count;
		this._itemsPerPage = 10;
	}

	public get results(): T[] {
		return this._results;
	}

	public get itemsPerPage(): number {
		return this._itemsPerPage;
	}

	public get currentPage(): number {
		return this._currentPage;
	}

	public get totalItems(): number {
		return this._totalItems;
	}

	public set results(value: T[]) {
		this._results = value;
	}

	public set itemsPerPage(value: number) {
		this._itemsPerPage = value;
	}

	public set currentPage(value: number) {
		this._currentPage = value;
	}

	public set totalItems(value: number) {
		this._totalItems = value;
	}

	getPagination() {
		return {
			itemsPerPage: this._itemsPerPage,
			currentPage: this._currentPage,
			totalItems: this._totalItems
		};
	}
}
*/
