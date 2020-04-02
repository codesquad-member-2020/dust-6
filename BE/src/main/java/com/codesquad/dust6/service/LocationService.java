package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.domain.MeasureDensityDTO;
import com.codesquad.dust6.utils.JsonUtils;
import com.codesquad.dust6.utils.PublicInstitutionUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class LocationService {


    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static List<DistanceDTO> distances() throws URISyntaxException {
        String url = PublicInstitutionUtils.BASE_URL + PublicInstitutionUtils.LOCATIONS_URL + "tmX=244148.546388&tmY=412423.75772" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE;
        String data = JsonUtils.datas(url);

        List<DistanceDTO> distances = new ArrayList<>();

        JSONArray jsonArray = new JSONObject(data).getJSONArray("list");

        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);
            String stationName = jsonObject.get("stationName").toString();
            float tm = Float.parseFloat(jsonObject.get("tm").toString());
            distances.add(new DistanceDTO(stationName, tm));
        }

        return distances;
    }

    public static DistanceDTO distance() throws URISyntaxException {
        return distances().get(0);
    }

    public static Object dustStatus(String stationName) throws URISyntaxException {
        String url = PublicInstitutionUtils.BASE_URL + PublicInstitutionUtils.MEASURE_DENSITY_URL + "stationName=" + stationName + "&dataTerm=daily&pageNo=1&numOfRows=24" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE + PublicInstitutionUtils.VERSION;
        String data = JsonUtils.datas(url);

        List<MeasureDensityDTO> measureDensities = new ArrayList<>();

        JSONArray jsonArray = new JSONObject(data).getJSONArray("list");

        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);
            String dataTime = jsonObject.get("dataTime").toString();
            int pm10Value = Integer.parseInt(jsonObject.get("pm10Value").toString());
            int pm10Grade = Integer.parseInt(jsonObject.get("pm10Grade").toString());
            measureDensities.add(new MeasureDensityDTO(dataTime, pm10Value, pm10Grade));
        }
        return measureDensities;
    }
}
