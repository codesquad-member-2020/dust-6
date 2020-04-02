import { forecast } from "./template";
import { OBSERVER_TYPE_LIST, SELECTORS } from "Utils/const";
import { $listen, $getBySelector } from "Utils/utilFunction";

export default class ForecastView {
	constructor(forecastModel) {
		this.forecastModel = forecastModel;
	}

	subscribe() {
		this.forecastModel.addObserver({ type: OBSERVER_TYPE_LIST.FETCH_DATA, observer: this.render });
	}

	render(data) {
		const container = $getBySelector(document, SELECTORS.COMMON.CONTAINER);
		const forecastPage = forecast`${data}`;
		// container.insertAdjacentHTML("beforeend", forecastPage);
	}
}
