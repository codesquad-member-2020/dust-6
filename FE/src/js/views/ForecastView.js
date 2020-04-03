import { forecast } from "./template";
import { OBSERVER_TYPE_LIST, SELECTORS } from "Utils/const";
import { $listen, $getBySelector } from "Utils/utilFunction";

export default class ForecastView {
	constructor(forecastModel) {
		this.forecastModel = forecastModel;
		this.forecastPanel = null;
		this.forecastImages = null;
		this.button = null;
		this.progressBar = null;
		this.playing = false;
	}

	subscribe() {
		this.forecastModel.addObserver({
			type: OBSERVER_TYPE_LIST.FETCH_DATA,
			observer: this.render
		});
		this.forecastModel.addObserver({
			type: OBSERVER_TYPE_LIST.FETCH_DATA,
			observer: this.cacheDomElements.bind(this)
		});
		this.forecastModel.addObserver({
			type: OBSERVER_TYPE_LIST.FETCH_DATA,
			observer: this.bindOnClickListener.bind(this)
		});
	}

	render(data) {
		const container = $getBySelector(document, SELECTORS.COMMON.CONTAINER);
		const forecastPage = forecast`${data}`;
		container.insertAdjacentHTML("beforeend", forecastPage);
	}

	cacheDomElements() {
		this.forecastPanel = $getBySelector(document, SELECTORS.FORECAST.PANEL);
		this.forecastImages = [
			...$getBySelector(this.forecastPanel, SELECTORS.FORECAST.IMAGES).children
		];
		this.button = $getBySelector(this.forecastPanel, SELECTORS.FORECAST.BUTTON);
		this.progressBar = $getBySelector(this.forecastPanel, SELECTORS.FORECAST.CONTROLLER);
	}

	buttonTouchHandler() {
		if (this.playing) return;
		// 버튼 이미지 변경
		this.button.textContent = "⏸️";
		// 이미지 전환 시작
		// 진행바 width 변경
	}

	bindOnClickListener() {
		$listen(this.button, "touchstart", () => this.buttonTouchHandler());
	}
}
