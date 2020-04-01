export default class ForecastView {
	constructor(forecastModel) {
		this.forecastModel = forecastModel;
	}

	subscribe() {
		this.forecastModel.addObserver(this.showLatestData);
	}

	showLatestData(data) {
		console.log("forecastView notified!", data);
	}
}
