import Observable from "Utils/Observable";
import Http from "Utils/http";
import { $getBySelector } from "Utils/utilFunction";
import {
	API,
	GEOLOCATION_OPTIONS,
	DEFAULT_LOCATION,
	OBSERVER_TYPE_LIST,
	SELECTORS
} from "Utils/const";

export default class DustModel extends Observable {
	constructor() {
		super();
		this.http = new Http();
		this.indexOfCurrentData = 0;
	}

	fetchData() {
		const url = `${API.PROD.CURRENT_24HOURS}longitude=${DEFAULT_LOCATION.LONGITUDE}&latitude=${DEFAULT_LOCATION.LATITUDE}`;
		this.http
			.get(url)
			.then(this.handleResponse.bind(this))
			.catch(this.handleError);
	}

	handleResponse(response) {
		if (response.code === 200) {
			this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: response });
			this.hideLoadingScreen();
		} else {
			throw Error(`네트워크 에러 --- ${response.code}`);
		}
	}

	handleError(error) {
		console.error(error);
	}

	showNoGpsScreen() {
		const noGpsScreen = $getBySelector(document, SELECTORS.COMMON.NO_GPS);
		noGpsScreen.style.display = "flex";
	}

	hideLoadingScreen() {
		const loadingScreen = $getBySelector(document, SELECTORS.COMMON.LOADING);
		loadingScreen.style.display = "none";
	}

	updateDisplayedData(index) {
		this.indexOfCurrentData = index;
		this.notify({ type: OBSERVER_TYPE_LIST.SCROLL, data: index });
	}
}
