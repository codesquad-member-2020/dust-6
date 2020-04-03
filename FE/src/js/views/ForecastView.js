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
		this.currentImgIndex = 0;
		this.timer = null;
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
		this.button.textContent = "⏸️";
		this.playing = true;
		this.play();
	}

	handleProgress() {
		const fullWidth = this.progressBar.previousElementSibling.offsetWidth;
		const progressWidth = Number(this.progressBar.style.width.slice(0, -2));
		if (progressWidth >= fullWidth) {
			this.stop();
			return;
		}
		const widthPerFrame = fullWidth / this.forecastImages.length;
		this.progressBar.style.width = progressWidth + widthPerFrame + "px";
	}

	handleImage() {
		const { forecastImages, currentImgIndex } = this;
		if (currentImgIndex === forecastImages.length) {
			this.forecastImages.forEach((image, index) =>
				index === 0 ? (image.style.opacity = 1) : (image.style.opacity = 0)
			);
			this.currentImgIndex = 0;
			return;
		}
		this.forecastImages.forEach((image, index) =>
			index === currentImgIndex ? (image.style.opacity = 1) : (image.style.opacity = 0)
		);
		this.currentImgIndex += 1;
	}

	play() {
		const that = this;
		this.timer = setInterval(function() {
			that.handleProgress.call(that);
			that.handleImage.call(that);
		}, 300);
	}

	stop() {
		clearInterval(this.timer);
		this.button.textContent = "▶️";
		this.playing = false;
		this.progressBar.style.width = "0px";
	}

	bindOnClickListener() {
		$listen(this.button, "touchend", () => this.buttonTouchHandler());
	}
}
