import { HEIGHT_OF_BAR } from "Utils/const";

export default class DustController {
	constructor(dustModel, dustView) {
		this.dustModel = dustModel;
		this.dustView = dustView;
		this.previousIndexOfBar = 0;
	}

	barGraphScrollHandler(scrollTopValue) {
		const currentIndexOfBar = Math.floor(scrollTopValue / HEIGHT_OF_BAR);
		if (currentIndexOfBar !== this.previousIndexOfBar) {
			this.dustModel.updateDisplayedData(currentIndexOfBar);
			this.previousIndexOfBar = currentIndexOfBar;
		}
	}

	async init() {
		this.dustView.subscribe();
		await this.dustModel.getGeoLocation();
		this.dustView.bindOnScrollListener(this.barGraphScrollHandler.bind(this));
	}
}
