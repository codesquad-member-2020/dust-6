package com.codesquad.dust6.service;

import com.codesquad.dust6.domain.CoordinateDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

public class LocationService {

    private static final RestTemplate restTemplate = new RestTemplate();
    private static final HttpHeaders headers = new HttpHeaders();
    private static Logger logger = LoggerFactory.getLogger(LocationService.class);

    public static Object locations(CoordinateDTO coordinate) {
        return null;
    }
}
