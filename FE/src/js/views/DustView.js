import { dust } from "./template";
import { OBSERVER_TYPE_LIST, GRADE_OPTIONS } from "Utils/const";
import { $listen, $getBySelector } from "Utils/utilFunction";

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
		const container = $getBySelector(document, ".container");
		const dustPage = dust`${data}`;
		container.insertAdjacentHTML("afterbegin", dustPage);
	}

	cacheDomElements() {
		this.dustPanel = $getBySelector(document, ".dust__panel");
		this.dustGraph = $getBySelector(document, ".dust__graph");
		this.dustGraphBars = [...this.dustGraph.children];
	}

	updateDustPanelView(index) {
		const currentBar = this.dustGraphBars[index];
		const { grade, value, time } = currentBar.dataset;
		const [emoji, text, color] = GRADE_OPTIONS[grade];
		this.dustPanel.style.background = `linear-gradient(${color}, #fff)`;
		$getBySelector(this.dustPanel, ".grade__emoji").textContent = emoji;
		$getBySelector(this.dustPanel, ".grade__text").textContent = text;
		$getBySelector(this.dustPanel, ".details__value").textContent = value;
		$getBySelector(this.dustPanel, ".details__time").textContent = time;
	}

	bindOnScrollListener(handler) {
		$listen(this.dustGraph, "scroll", e => handler(e.target.scrollTop));
	}
}
