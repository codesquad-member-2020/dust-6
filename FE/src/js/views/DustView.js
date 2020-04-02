import { dust } from "./template";

export default class DustView {
	constructor(dustModel) {
		this.dustModel = dustModel;
	}

	subscribe() {
		this.dustModel.addObserver(this.showLatestData);
	}

	showLatestData(data) {
		const container = document.querySelector(".container");
		const dustPage = dust`${data}`;
		container.insertAdjacentHTML("afterbegin", dustPage);
	}
}
