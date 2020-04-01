export default class ForecastController {
	constructor(forecastModel, forecastView) {
		this.forecastModel = forecastModel;
		this.forecastView = forecastView;
	}

	playButtonHandler() {}
	progressBarHandler() {}

	init() {
		this.forecastView.subscribe();
		this.forecastModel.fetchData();
	}
}
