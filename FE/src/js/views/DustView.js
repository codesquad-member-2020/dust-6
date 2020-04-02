import { dust } from "./template";
import { OBSERVER_TYPE_LIST } from "Utils/const";

export default class DustView {
	constructor(dustModel) {
		this.dustModel = dustModel;
	}

	subscribe() {
		this.dustModel.addObserver({ type: OBSERVER_TYPE_LIST.FETCH_DATA, observer: this.render });
	}

	render(data) {
		const container = document.querySelector(".container");
		const dustPage = dust`${data}`;
		container.insertAdjacentHTML("afterbegin", dustPage);
	}
}
