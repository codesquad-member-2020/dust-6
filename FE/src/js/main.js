import "Scss/styles.scss";
import DustModel from "Models/DustModel";
import ForecastModel from "Models/ForecastModel";
import DustView from "Views/DustView";
import ForecastView from "Views/ForecastView";
import DustController from "Controllers/DustController";
import ForecastController from "Controllers/ForecastController";
import "Controllers/NavController";

const dustModel = new DustModel();
const forecastModel = new ForecastModel();

const dustView = new DustView(dustModel);
const forecastView = new ForecastView(forecastModel);

const dustController = new DustController(dustModel, dustView);
const forecastController = new ForecastController(forecastModel, forecastView);

window.addEventListener("DOMContentLoaded", () => {
	dustController.init();
	forecastController.init();
});
