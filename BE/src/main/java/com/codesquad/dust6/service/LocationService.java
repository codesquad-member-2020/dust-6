package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.utils.PublicInstitutionUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jdk.nashorn.internal.parser.JSONParser;
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
import java.util.Arrays;
import java.util.List;

public class LocationService {

    private static final RestTemplate restTemplate = new RestTemplate();

    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static Object test() throws URISyntaxException, JsonProcessingException {
        URI uri = new URI(PublicInstitutionUtils.URL + "?tmX=244148.546388&tmY=412423.75772" + PublicInstitutionUtils.SERVICE_KEY_AND_RETURN_TYPE);
        String json = restTemplate.getForObject(uri, String.class);

        return null;
    }


    public static Object locations() throws URISyntaxException, IOException {
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
    }
}
