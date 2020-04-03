import Observable from "Utils/Observable";
import Http from "Utils/http";
import { API, OBSERVER_TYPE_LIST } from "Utils/const";

export default class ForecastModel extends Observable {
	constructor() {
		super();
		this.http = new Http();
	}

	fetchData() {
		const url = API.PROD.FORECAST;
		this.http
			.get(url)
			.then(this.handleResponse.bind(this))
			.catch(this.handleError);
	}

	handleResponse(response) {
		if (response.code === 200) {
			this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: response.data });
		} else {
			throw Error(`네트워크 에러 --- ${response.code}`);
		}
	}

	handleError(error) {
		console.error(error);
	}
}
