import Observable from "Utils/Observable";
import mockData from "Utils/mockData";

export default class DustModel extends Observable {
	constructor() {
		super();
	}

	fetchData() {
		this.notify(mockData.dust);
	}
}
