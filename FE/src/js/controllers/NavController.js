const header = document.querySelector("header");
const navDust = header.querySelector(".menu:first-child");
const navForecast = header.querySelector(".menu:last-child");
const container = document.querySelector(".container");

navDust.addEventListener("touchstart", () => (container.style.left = 0), { passive: false });
navForecast.addEventListener("touchstart", () => (container.style.left = "-100vw"), {
	passive: false
});
