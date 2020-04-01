export default class Observable {
	constructor() {
		this._observers = new Set();
	}

	addObserver(observer) {
		this._observers.add(observer);
	}

	removeObserver(observer) {
		this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
	}

	notify(data) {
		this._observers.forEach(observer => observer(data));
	}
}
