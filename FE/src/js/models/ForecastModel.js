import Observable from "../utils/Observable";
import mockData from "../utils/mockData";

export default class ForecastModel extends Observable {
	constructor() {
		super();
	}

	fetchData() {
		this.notify(mockData.forecast);
	}
}
