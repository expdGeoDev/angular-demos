import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class BasicService {
	constructor() {}

	getMessages() {
		return 'Retrieved all messages';
	}
}
