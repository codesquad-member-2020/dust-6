import Observable from "Utils/Observable";
import Http from "Utils/http";

export default class DustModel extends Observable {
	constructor() {
		super();
	}

	getGeoLocation() {
		if (navigator.geolocation) {
			const options = {
				enableHighAccuracy: true,
				maximumAge: 0,
				timeout: Infinity
			};
			navigator.geolocation.getCurrentPosition(
				this.success.bind(this),
				this.error.bind(this),
				options
			);
		} else {
			this.showNoGpsScreen();
		}
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
		const noGpsScreen = document.querySelector(".no-gps");
		noGpsScreen.style.display = "flex";
	}
}
