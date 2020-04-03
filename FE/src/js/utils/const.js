export const API = {
	DEV: {
		CURRENT_24HOURS: "https://codesquad-dust6.herokuapp.com/api/dust-status/location?",
		FORECAST: "https://codesquad-dust6.herokuapp.com/api/dust/forecast"
	},
	PROD: {
		CURRENT_24HOURS: "http://34.236.160.204:8080/api/dust-status/location?",
		FORECAST: "http://34.236.160.204:8080/api/dust/forecast"
	}
};

export const GEOLOCATION_OPTIONS = {
	enableHighAccuracy: true,
	maximumAge: 0,
	timeout: Infinity
};

export const DEFAULT_LOCATION = {
	NAME: "CodeSquad",
	LONGITUDE: 127.033419,
	LATITUDE: 37.490846
};

export const OBSERVER_TYPE_LIST = {
	FETCH_DATA: "fetchData",
	SCROLL: "scrollBarGraph"
};

export const HEIGHT_OF_BAR = 20;

export const GRADE_OPTIONS = {
	1: ["😀", "좋음", "#4e8deb"],
	2: ["🙂", "보통", "#4dd188"],
	3: ["😷", "나쁨", "#f3ac41"],
	4: ["😱", "최악", "#d34e44"]
};

export const SELECTORS = {
	COMMON: {
		CONTAINER: ".container",
		VIEWPORT: ".big-screen",
		NO_GPS: ".no-gps",
		LOADING: ".loading"
	},
	DUST: {
		PANEL: ".dust__panel",
		GRAPH: ".dust__graph",
		EMOJI: ".grade__emoji",
		TEXT: ".grade__text",
		DETAILS_VALUE: ".details__value",
		DETAILS_TIME: ".details__time"
	},
	FORECAST: {
		PANEL: ".forecast__panel",
		IMAGE: ".forecast__image",
		CONTROLS: ".forecast__controls",
		BUTTON: ".button",
		CONTROLLER: ".controller",
		OVERALL: ".forecast__overall",
		GRADE: ".forecast__grade"
	}
};
