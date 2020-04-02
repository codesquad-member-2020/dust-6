package com.codesquad.dust6.api;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import static com.codesquad.dust6.utils.KakaoUtils.KAKAO_API_KEY;
import static com.codesquad.dust6.utils.KakaoUtils.KAKAO_API_URL;

public class ApiLocationController {

    @GetMapping("/api/dust-status/location")
    public org.json.JSONObject getStatus(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longitude) throws IOException {
        StringBuilder urlbuilder = new StringBuilder(KAKAO_API_URL);
        urlbuilder.append("?" + URLEncoder.encode("x", "UTF-8") + "=" + latitude);
        urlbuilder.append("&" + URLEncoder.encode("y", "UTF-8") + "=" + longitude);
        urlbuilder.append("&" + URLEncoder.encode("input_coord", "UTF-8") + "=" + URLEncoder.encode("WGS84", "UTF-8"));
        urlbuilder.append("&" + URLEncoder.encode("output_coord", "UTF-8") + "=" + URLEncoder.encode("TM", "UTF-8"));
        URL url = new URL(urlbuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Authorization", KAKAO_API_KEY);
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        String result = sb.toString();
        try {
            JSONObject json = new JSONObject(result);
            System.out.println(json.get("documents").toString());
            JSONArray jsonArray = (JSONArray) json.get("documents");
            return jsonArray.getJSONObject(0);
        } catch (JSONException e) {
            e.getMessage();
        }
        return null;
    }
}
