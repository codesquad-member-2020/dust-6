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
		NO_GPS: ".no-gps"
	},
	DUST: {
		PANEL: ".dust__panel",
		GRAPH: ".dust__graph",
		EMOJI: ".grade__emoji",
		TEXT: ".grade__text",
		DETAILS_VALUE: ".details__value",
		DETAILS_TIME: ".details__time"
	},
	FORECAST: {}
};
