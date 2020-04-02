export default class DustController {
	constructor(dustModel, dustView) {
		this.dustModel = dustModel;
		this.dustView = dustView;
	}

	barGraphScrollHandler() {}

	init() {
		this.dustView.subscribe();
		this.dustModel.getGeoLocation();
	}
}
