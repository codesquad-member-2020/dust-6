export default class Observable {
	constructor() {
		this._observers = {
			fetchData: new Set(),
			scrollBarGraph: new Set(),
			handleForecastAnimation: new Set()
		};
	}

	addObserver({ type, observer }) {
		this._observers[type].add(observer);
	}

	removeObserver({ type, observer }) {
		this._observers[type] = [...this._observers].filter(subscriber => subscriber !== observer);
	}

	notify({ type, data }) {
		this._observers[type].forEach(observer => observer(data));
	}
}
