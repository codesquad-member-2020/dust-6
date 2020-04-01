import "Scss/styles.scss";
import DustModel from "./models/DustModel";
import ForecastModel from "./models/ForecastModel";
import DustView from "./views/DustView";
import ForecastView from "./views/ForecastView";
import DustController from "./controllers/DustController";
import ForecastController from "./controllers/ForecastController";

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
