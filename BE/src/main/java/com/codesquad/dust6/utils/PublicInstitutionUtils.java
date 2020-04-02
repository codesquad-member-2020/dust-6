package com.codesquad.dust6.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class PublicInstitutionUtils {

    public static final String BASE_URL = "http://openapi.airkorea.or.kr/openapi/services/rest";
    public static final String LOCATIONS_URL = "/MsrstnInfoInqireSvc/getNearbyMsrstnList?";
    public static final String MEASURE_DENSITY_URL = "/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";
    public static final String VERSION = "&ver=1.3";
    public static final String SERVICE_KEY_AND_RETURN_TYPE = "&ServiceKey=AKok1YlRGRp0LptBC4uO9DnClqmVvf0bitpPv%2BH%2Bavy2tMZ3YiuvL%2BxaBFQHKE8jhbA%2FL1f8K0w12wn4Nt1T1Q%3D%3D&_returnType=json";
    public static final String TIME_AND_PRINT_COUNT = "&dataTerm=month&pageNo=1&numOfRows=24";
}
