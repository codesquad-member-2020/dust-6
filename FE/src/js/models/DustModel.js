import Observable from "Utils/Observable";
import Http from "Utils/http";
import mockData from "Utils/mockData";
import { OBSERVER_TYPE_LIST, SELECTORS } from "Utils/const";
import { $getBySelector } from "Utils/utilFunction";

export default class DustModel extends Observable {
	constructor() {
		super();
		this.indexOfCurrentData = 0;
	}

	getGeoLocation() {
		this.displayedData = mockData.dust.data[0];
		this.notify({ type: OBSERVER_TYPE_LIST.FETCH_DATA, data: mockData.dust });
		// if (navigator.geolocation) {
		// 	const options = {
		// 		enableHighAccuracy: true,
		// 		maximumAge: 0,
		// 		timeout: Infinity
		// 	};
		// 	navigator.geolocation.getCurrentPosition(
		// 		this.success.bind(this),
		// 		this.error.bind(this),
		// 		options
		// 	);
		// } else {
		// 	this.showNoGpsScreen();
		// }
	}

	success(position) {
		const { latitude, longitude } = position.coords;
		// .env
		const url = `http://34.23.92:8080/api*/dust-status*/location?latitude=${latitude}&longitude=${longitude}`;
		const http = new Http();
		http.get(url).then(res => console.log(res));
	}

	error(error) {
		if (error.code == error.PERMISSION_DENIED) {
			this.showNoGpsScreen();
		}
	}

	showNoGpsScreen() {
		const noGpsScreen = $getBySelector(document, SELECTORS.COMMON.VIEWPORT);
		noGpsScreen.style.display = "flex";
	}

	updateDisplayedData(index) {
		this.indexOfCurrentData = index;
		this.notify({ type: OBSERVER_TYPE_LIST.SCROLL, data: index });
	}
}
