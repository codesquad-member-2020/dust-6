import Observable from "Utils/Observable";
import Http from "Utils/http";
import mockData from "Utils/mockData";
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

	getGeoLocation() {
		navigator.geolocation.getCurrentPosition(
			this.geoSuccess.bind(this),
			this.geoError.bind(this),
			GEOLOCATION_OPTIONS
		);
	}

	geoSuccess(position) {
		let { longitude, latitude } = position.coords;
		if (!longitude || !latitude) {
			longitude = DEFAULT_LOCATION.LONGITUDE;
			latitude = DEFAULT_LOCATION.LATITUDE;
		}
		this.fetchData(longitude, latitude);
	}

	geoError(error) {
		if (error.code == error.PERMISSION_DENIED) {
			this.hideLoadingScreen();
			this.showNoGpsScreen();
		}
	}

	fetchData(longitude, latitude) {
		const url = `${API.CURRENT_24HOURS}${longitude}&latitude=${latitude}`;
		try {
			const response = this.http.get(url);
			this.handleResponse(response);
		} catch (error) {
			this.handleError(error);
		}
	}

	handleResponse(response) {
		this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: mockData.dust });
		this.hideLoadingScreen();
		// if (response.code === 200) {
		// 	this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: response.data });
		//   this.hideLoadingScreen();
		// } else {
		// 	throw Error(`네트워크 에러 --- ${response.code}`);
		// }
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
