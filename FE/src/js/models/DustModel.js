import Observable from "../utils/Observable";
import mockData from "../utils/mockData";

export default class DustModel extends Observable {
	constructor() {
		super();
	}

	fetchData() {
		this.notify(mockData.dust);
	}
}
