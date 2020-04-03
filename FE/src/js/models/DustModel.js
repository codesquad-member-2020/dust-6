import Observable from "Utils/Observable";
import Http from "Utils/http";
import mockData from "Utils/mockData";
import {
	API,
	GEOLOCATION_OPTIONS,
	DEFAULT_LOCATION,
	OBSERVER_TYPE_LIST,
	SELECTORS
} from "Utils/const";
import { $getBySelector } from "Utils/utilFunction";

export default class DustModel extends Observable {
	constructor() {
		super();
		this.http = new Http();
		this.indexOfCurrentData = 0;
	}

	getGeoLocation() {
		const that = this;
		return new Promise(function() {
			navigator.geolocation.getCurrentPosition(
				that.geoSuccess.bind(that),
				that.geoError.bind(that),
				GEOLOCATION_OPTIONS
			);
		});
	}

	geoSuccess(position) {
		let { longitude, latitude } = position.coords;
		if (!longitude || !latitude) {
			longitude = DEFAULT_LOCATION.LONGITUDE;
			latitude = DEFAULT_LOCATION.LATITUDE;
		}
		this.displayedData = mockData.dust.data[0];
		this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: mockData.dust });
		// this.fetchData(longitude, latitude);
	}

	geoError(error) {
		if (error.code == error.PERMISSION_DENIED) {
			this.showNoGpsScreen();
			return Promise.reject("현재 위치를 알 수 없습니다.");
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
		if (response.code === 200) {
			this.displayedData = response.data[0];
			this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: response.data });
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

	updateDisplayedData(index) {
		this.indexOfCurrentData = index;
		this.notify({ type: OBSERVER_TYPE_LIST.SCROLL, data: index });
	}
}
