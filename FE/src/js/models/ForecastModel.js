import Observable from "Utils/Observable";
import Http from "Utils/http";
import mockData from "Utils/mockData";
import { API, OBSERVER_TYPE_LIST } from "Utils/const";

export default class ForecastModel extends Observable {
	constructor() {
		super();
		this.http = new Http();
	}

	fetchData() {
		console.log("forecast fetchData called");
		this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: mockData.forecast.data });
		// const url = API.FORECAST;
		// try {
		// 	const response = this.http.get(url);
		// 	this.handleResponse(response);
		// } catch (error) {
		// 	this.handleError(error);
		// }
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
