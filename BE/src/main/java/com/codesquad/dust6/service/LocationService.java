package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.utils.PublicInstitutionUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class LocationService {

    private static final RestTemplate restTemplate = new RestTemplate();

    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static List<DistanceDTO> distances() throws URISyntaxException {
        URI uri = new URI(PublicInstitutionUtils.URL + "tmX=244148.546388&tmY=412423.75772" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE);
        String data = restTemplate.getForObject(uri, String.class);

        List<DistanceDTO> distances = new ArrayList<>();;

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

/*    public static Object locations() throws URISyntaxException, IOException {
        BufferedReader br = null;

        URL url = new URL(PublicInstitutionUtils.URL
                + "tmX=" + 1.0f
                + "&tmY=" + 2.0f
                + "&serviceKey=" + PublicInstitutionUtils.SERVICE_KEY
                + "&_returnType=" + PublicInstitutionUtils.RETURN_TYPE);

        HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
        urlConnection.setRequestMethod("GET");
        br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), StandardCharsets.UTF_8));
        String result = "";
        String line;
        while ((line = br.readLine()) != null) {
            result += line + "\n";
        }
        logger.debug("result : {} ", result);

        return result;
    }*/
}
