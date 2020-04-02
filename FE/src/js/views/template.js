export function dust(_, { stationName, data }) {
	const panel = dustPanel(stationName, data[0]);
	const graphArea = graph(data);
	return `<div class="page dust">${panel}${graphArea}</div>`;
}

const options = {
	1: ["😀", "좋음", "#4e8deb"],
	2: ["🙂", "보통", "#4dd188"],
	3: ["😷", "나쁨", "#f3ac41"],
	4: ["😱", "최악", "#d34e44"]
};

function dustPanel(stationName, { dataTime, pm10Value, pm10Grade }) {
	const title = `<h1>미세먼지 앱</h1>`;
	const gradeEmoji = `<div class="grade__emoji">${options[pm10Grade][0]}</div>`;
	const gradeText = `<div class="grade__text">${options[pm10Grade][1]}</div>`;
	const values = `<div class="dust__value"><span>
			<span>${pm10Value}</span> 𝜇g/m³
    </span><span>${dataTime}</span></div>`;
	const stationNameBox = `<div class="dust__station">
		<span class="station__name">${stationName}</span> 측정소 기준
	</div>`;
	return `<div class="dust__panel" style="background:linear-gradient(${options[pm10Grade][2]}, #fff);">${title}${gradeEmoji}${gradeText}${values}${stationNameBox}</div>`;
}

function graph(data) {
	const graphs = data.reduce((bars, { dataTime, pm10Value, pm10Grade }) => {
		bars += `<div class="bar-container" data-time="${dataTime}" data-value="${pm10Value}" data-grade="${pm10Grade}">
		<div class="bar" style="width:${(pm10Value / 200) * 100}%; background:${
			options[pm10Grade][2]
		};"></div>
		<span class="value">${pm10Value}</span>
	</div>`;
		return bars;
	}, "");
	return `<div class="dust__graph">${graphs}</div>`;
}
