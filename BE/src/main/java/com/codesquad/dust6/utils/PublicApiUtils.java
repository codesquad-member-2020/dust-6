package com.codesquad.dust6.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;

public class PublicApiUtils {

    public static final String url = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList";
    public static final String SERVICE_KEY = "AKok1YlRGRp0LptBC4uO9DnClqmVvf0bitpPv%2BH%2Bavy2tMZ3YiuvL%2BxaBFQHKE8jhbA%2FL1f8K0w12wn4Nt1T1Q%3D%3D";
    public static final String RETURN_TYPE = "&_returnType=json";
    private static final RestTemplate restTemplate = new RestTemplate();
    public static HttpHeaders header = new HttpHeaders();
    public static HttpEntity<?> entity = new HttpEntity<>(header);
    public static HashMap<String, Object> result = new HashMap<>();
    private Logger logger = LoggerFactory.getLogger(PublicApiUtils.class);

    public static String test() throws URISyntaxException {
        URI uri = new URI(url + "?" + "tmX=244148.546388&tmY=412423.75772&ServiceKey=" + SERVICE_KEY + RETURN_TYPE);
        String response = restTemplate.getForObject(uri, String.class);
        return response;
    }
}
