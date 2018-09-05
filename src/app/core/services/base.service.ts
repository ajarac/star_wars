import { environment } from '@env/environment.prod';

export abstract class BaseService {
	URL: string = environment.api;
}
