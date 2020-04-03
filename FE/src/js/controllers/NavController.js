import { $listen } from "Utils/utilFunction";

const header = document.querySelector("header");
const navDust = header.querySelector(".menu:first-child");
const navForecast = header.querySelector(".menu:last-child");
const container = document.querySelector(".container");

const pageSwitchingHandler = e => {
	const selectedMenu = e.target.dataset.title;
	if (!selectedMenu) return;

	if (selectedMenu === "미세먼지") {
		container.style.left = 0;
		navDust.classList.add("selected");
		navForecast.classList.remove("selected");
	} else {
		container.style.left = "-100vw";
		navForecast.classList.add("selected");
		navDust.classList.remove("selected");
	}
};

$listen(header, "touchend", e => pageSwitchingHandler(e));
