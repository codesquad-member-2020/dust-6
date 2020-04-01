export default {
	dust: {
		code: 200,
		message: "success",
		stationName: "종로구",
		data: [
			{
				dataTime: "2020-03-31 14:00",
				pm10Value: 24,
				pm10Grade: 1
			},
			{
				dataTime: "2020-03-31 15:00",
				pm10Value: 50,
				pm10Grade: 2
			},
			{
				dataTime: "2020-03-31 16:00",
				pm10Value: 105,
				pm10Grade: 3
			},
			{
				dataTime: "2020-03-31 17:00",
				pm10Value: 61,
				pm10Grade: 2
			},
			{
				dataTime: "2020-03-31 18:00",
				pm10Value: 55,
				pm10Grade: 2
			},
			{
				dataTime: "2020-03-31 19:00",
				pm10Value: 61,
				pm10Grade: 2
			},
			{
				dataTime: "2020-03-31 20:00",
				pm10Value: 5,
				pm10Grade: 1
			},
			{
				dataTime: "2020-03-31 21:00",
				pm10Value: 31,
				pm10Grade: 1
			},
			{
				dataTime: "2020-03-31 22:00",
				pm10Value: 120,
				pm10Grade: 3
			},
			{
				dataTime: "2020-03-31 23:00",
				pm10Value: 220,
				pm10Grade: 4
			},
			{
				dataTime: "2020-03-31 24:00",
				pm10Value: 105,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 01:00",
				pm10Value: 61,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 02:00",
				pm10Value: 55,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 03:00",
				pm10Value: 61,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 04:00",
				pm10Value: 55,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 05:00",
				pm10Value: 120,
				pm10Grade: 4
			},
			{
				dataTime: "2020-04-01 05:00",
				pm10Value: 175,
				pm10Grade: 4
			},
			{
				dataTime: "2020-04-01 06:00",
				pm10Value: 130,
				pm10Grade: 3
			},
			{
				dataTime: "2020-04-01 07:00",
				pm10Value: 300,
				pm10Grade: 4
			},
			{
				dataTime: "2020-04-01 08:00",
				pm10Value: 10,
				pm10Grade: 1
			},
			{
				dataTime: "2020-04-01 09:00",
				pm10Value: 61,
				pm10Grade: 2
			},
			{
				dataTime: "2020-04-01 10:00",
				pm10Value: 84,
				pm10Grade: 3
			},
			{
				dataTime: "2020-04-01 11:00",
				pm10Value: 100,
				pm10Grade: 3
			},
			{
				dataTime: "2020-04-01 12:00",
				pm10Value: 61,
				pm10Grade: 2
			}
		]
	},
	forecast: {
		code: 200,
		message: "success",
		data: {
			imageUrls: [
				"http://www.airkorea.or.kr/file/viewImage/?atch_id=56593",
				"http://www.airkorea.or.kr/file/viewImage/?atch_id=56593",
				"http://www.airkorea.or.kr/file/viewImage/?atch_id=56593"
			],
			informOverall:
				"○ [미세먼지] 원활한 대기 확산으로 대기 상태가 '보통' 수준이겠으나, 전일 발원한 황사의 영향으로 일부 남서부지역은 늦은 밤에 농도가 다소 높을 것으로 예상됨",
			informGrade:
				"서울 : 보통,제주 : 보통,전남 : 보통,전북 : 보통,광주 : 보통,경남 : 보통,경북 : 보통,울산 : 보통,대구 : 보통,부산 : 보통,충남 : 보통,충북 : 보통,세종 : 보통,대전 : 보통,영동 : 보통,영서 : 보통,경기남부 : 보통,경기북부 : 보통,인천 : 보통"
		}
	}
};
