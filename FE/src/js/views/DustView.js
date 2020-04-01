export default class DustView {
	constructor(dustModel) {
		this.dustModel = dustModel;
	}

	subscribe() {
		this.dustModel.addObserver(this.showLatestData);
	}

	showLatestData(data) {
		console.log("dustView notified! ", data);
	}
}
