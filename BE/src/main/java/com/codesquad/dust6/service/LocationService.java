package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.domain.MeasureDensityDTO;
import com.codesquad.dust6.utils.PublicInstitutionUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class LocationService {


    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static List<DistanceDTO> distances() throws URISyntaxException {
        URI uri = new URI(PublicInstitutionUtils.BASE_URL + PublicInstitutionUtils.LOCATIONS_URL + "tmX=244148.546388&tmY=412423.75772" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE);
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

    public static MeasureDensityDTO dustStatus() throws URISyntaxException {
        "/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?&ServiceKey=서비스키&ver=1.3"
        distance();
        URI uri = new URI(PublicInstitutionUtils.BASE_URL + PublicInstitutionUtils.MEASURE_DENSITY_URL + "stationName=종로구&dataTerm=month&pageNo=1&numOfRows=10" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE + PublicInstitutionUtils.VERSION);
        String data = restTemplate.getForObject(uri, String.class);
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
