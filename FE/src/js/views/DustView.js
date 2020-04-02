import { dust } from "./template";
import { OBSERVER_TYPE_LIST } from "Utils/const";

export default class DustView {
	constructor(dustModel) {
		this.dustModel = dustModel;
		this.dustPanel = null;
		this.dustGraph = null;
		this.dustGraphBars = null;
	}

	subscribe() {
		this.dustModel.addObserver({ type: OBSERVER_TYPE_LIST.FETCH_DATA, observer: this.render });
		this.dustModel.addObserver({
			type: OBSERVER_TYPE_LIST.FETCH_DATA,
			observer: this.cacheDomElements.bind(this)
		});
		this.dustModel.addObserver({
			type: OBSERVER_TYPE_LIST.SCROLL,
			observer: this.updateDustPanelView.bind(this)
		});
	}

	render(data) {
		const container = document.querySelector(".container");
		const dustPage = dust`${data}`;
		container.insertAdjacentHTML("afterbegin", dustPage);
	}

	cacheDomElements() {
		this.dustPanel = document.querySelector(".dust__panel");
		this.dustGraph = document.querySelector(".dust__graph");
		this.dustGraphBars = [...this.dustGraph.children];
	}

	updateDustPanelView(index) {
		const currentBar = this.dustGraphBars[index];
		const { grade, value, time } = currentBar.dataset;
		console.log(grade, value, time);
	}

	bindOnScrollListener(handler) {
		this.dustGraph.addEventListener("scroll", e => handler(e.target.scrollTop));
	}
}
