package com.codesquad.dust6.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class PublicInstitutionUtils {

    public static final String URL = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?";
    public static final String SERVICE_KEY = "AKok1YlRGRp0LptBC4uO9DnClqmVvf0bitpPv%2BH%2Bavy2tMZ3YiuvL%2BxaBFQHKE8jhbA%2FL1f8K0w12wn4Nt1T1Q%3D%3D";
    public static final String RETURN_TYPE = "json";
    public static final String SERVICE_KEY_AND_RETURN_TYPE = "&ServiceKey=AKok1YlRGRp0LptBC4uO9DnClqmVvf0bitpPv%2BH%2Bavy2tMZ3YiuvL%2BxaBFQHKE8jhbA%2FL1f8K0w12wn4Nt1T1Q%3D%3D&_returnType=json";

    public static String getServiceKey() throws UnsupportedEncodingException {
        return URLDecoder.decode(SERVICE_KEY, StandardCharsets.UTF_8.toString());
    }
}
