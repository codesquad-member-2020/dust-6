import { GRADE_OPTIONS } from "Utils/const";

export function dust(_, { stationName, data }) {
	const panel = dustPanel(stationName, data[0]);
	const graphArea = graph(data);
	return `<div class="page dust">${panel}${graphArea}</div>`;
}

function dustPanel(stationName, { dataTime, pm10Value, pm10Grade }) {
	const title = `<h1>미세먼지 앱</h1>`;
	const gradeEmoji = `<div class="grade__emoji">${GRADE_OPTIONS[pm10Grade][0]}</div>`;
	const gradeText = `<div class="grade__text">${GRADE_OPTIONS[pm10Grade][1]}</div>`;
	const values = `<div class="dust__details"><span>
			<span class="details__value">${pm10Value}</span> 𝜇g/m³
    </span><span class="details__time">${dataTime}</span></div>`;
	const stationNameBox = `<div class="dust__station">
		<span class="station__name">${stationName}</span> 측정소 기준
	</div>`;
	return `<div class="dust__panel" style="background:linear-gradient(${GRADE_OPTIONS[pm10Grade][2]}, #fff);">${title}${gradeEmoji}${gradeText}${values}${stationNameBox}</div>`;
}

function graph(data) {
	const graphs = data.reduce((bars, { dataTime, pm10Value, pm10Grade }) => {
		bars += `<div class="bar-container" data-time="${dataTime}" data-value="${pm10Value}" data-grade="${pm10Grade}">
		<div class="bar" style="width:${(pm10Value / 200) * 100}%; background:${
			GRADE_OPTIONS[pm10Grade][2]
		};"></div>
		<span class="value">${pm10Value}</span>
	</div>`;
		return bars;
	}, "");
	return `<div class="dust__graph">${graphs}</div>`;
}
