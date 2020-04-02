let xDown = null;
let xDiff = null;
let timeDown = null;
let startEl = null;

const handleTouchStart = e => {
	if (e.target.dataset.swipeIgnore === "true") return;

	startEl = e.target;
	timeDown = Date.now();
	xDown = e.touches[0].clientX;
	xDiff = 0;
};

const handleTouchMove = e => {
	if (!xDown) return;

	const xUp = e.touches[0].clientX;
	xDiff = xDown - xUp;
	e.target.closest(".container").style.left = "-" + xDiff + "px";
};

const handleTouchEnd = e => {
	if (startEl !== e.target) return;

	const swipeThreshold = screen.width / 2;
	const swipeTimeout = 500;
	const timeDiff = Date.now() - timeDown;

	if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
		xDiff > 0
			? (e.target.closest(".container").style.left = "-100vw")
			: (e.target.closest(".container").style.left = 0);
	}

	xDown = null;
	timeDown = null;
};

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);
