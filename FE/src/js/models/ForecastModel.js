import Observable from "Utils/Observable";
import mockData from "Utils/mockData";
import { OBSERVER_TYPE_LIST } from "Utils/const";

export default class ForecastModel extends Observable {
	constructor() {
		super();
	}

	fetchData() {
		this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: mockData.forecast.data });
	}
}
