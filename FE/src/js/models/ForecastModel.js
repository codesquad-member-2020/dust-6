import Observable from "Utils/Observable";
import mockData from "Utils/mockData";

export default class ForecastModel extends Observable {
	constructor() {
		super();
	}

	fetchData() {
		this.notify(mockData.forecast);
	}
}
