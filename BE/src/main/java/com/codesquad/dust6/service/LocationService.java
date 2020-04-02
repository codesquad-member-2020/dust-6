package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.CoordinateDTO;
import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.domain.MeasureDensityDTO;
import com.codesquad.dust6.utils.JsonUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static com.codesquad.dust6.utils.KakaoUtils.*;
import static com.codesquad.dust6.utils.PublicInstitutionUtils.*;

public class LocationService {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static List<DistanceDTO> distances(CoordinateDTO coordinate) throws URISyntaxException {
        String url = BASE_URL + LOCATIONS_URL + "tmX=" + coordinate.getLongitude() + "&tmY=" + coordinate.getLatitude() + SERVICE_KEY_AND_RETURN_TYPE;
        String data = JsonUtils.data(url);

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

    public static DistanceDTO distance(CoordinateDTO coordinate) throws URISyntaxException {
        return distances(coordinate).get(0);
    }

    public static Object dustStatus(String stationName) throws URISyntaxException {
        String url = BASE_URL + MEASURE_DENSITY_URL + "stationName=" + stationName + TIME_AND_PRINT_COUNT + SERVICE_KEY_AND_RETURN_TYPE + VERSION;
        String data = JsonUtils.data(url);

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

    public static CoordinateDTO coordinate(CoordinateDTO coordinate) throws IOException {
        StringBuilder urlbuilder = new StringBuilder(KAKAO_API_URL);

        urlbuilder.append("?x=" + coordinate.getLatitude())
                .append("&y=" + coordinate.getLongitude())
                .append(INPUT_AND_OUTPUT_TYPE);

        URL url = new URL(urlbuilder.toString());

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Authorization", KAKAO_API_KEY);

        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));

        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }

        rd.close();
        conn.disconnect();

        String result = sb.toString();

        JSONObject json = new JSONObject(result);
        JSONArray jsonArray = (JSONArray) json.get("documents");
        JSONObject jsonObject = jsonArray.getJSONObject(0);

        float longitude = Float.parseFloat(jsonObject.get("x").toString());
        float latitude = Float.parseFloat(jsonObject.get("y").toString());

        return new CoordinateDTO(longitude, latitude);
    }
}
