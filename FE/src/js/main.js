import "Scss/styles.scss";
import DustModel from "Models/DustModel";
import ForecastModel from "Models/ForecastModel";
import DustView from "Views/DustView";
import ForecastView from "Views/ForecastView";
import "Controllers/NavController";

const dustModel = new DustModel();
const forecastModel = new ForecastModel();

const dustView = new DustView(dustModel);
const forecastView = new ForecastView(forecastModel);

window.addEventListener("DOMContentLoaded", () => {
	dustView.subscribe();
	forecastView.subscribe();

	dustModel.fetchData();
	forecastModel.fetchData();
});
