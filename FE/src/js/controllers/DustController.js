export default class DustController {
	constructor(dustModel, dustView) {
		this.dustModel = dustModel;
		this.dustView = dustView;
	}

	barGraphHandler() {}

	init() {
		this.dustView.subscribe();
		this.dustModel.getGeoLocation();
	}
}
