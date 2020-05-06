package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.OverallDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static com.codesquad.dust6.utils.JsonUtils.data;
import static com.codesquad.dust6.utils.PublicInstitutionUtils.*;

@RestController
public class ApiForecastController {

    @GetMapping("/api/dust/forecast")
    public ResponseDTO forecast() throws URISyntaxException {
        LocalTime currentTime = LocalTime.now();
        String today;
        if (currentTime.getHour() < 5) today = LocalDate.now().minusDays(1).toString();
        else today = LocalDate.now().toString();

        String url = BASE_URL + FORECAST_URL
                + "searchDate=" + today + SERVICE_KEY_AND_RETURN_TYPE;
        String response = data(url);
        JSONObject forecastObject = new JSONObject(response).getJSONArray("list").getJSONObject(0);

        List<String> imageUrls = new ArrayList<>();

        for (int i = 1; i < 4; i++) {
            String imageUrl = forecastObject.get("imageUrl" + i).toString();
            imageUrls.add(imageUrl);
        }

        String informOverall = forecastObject.get("informOverall").toString();
        String informGrade = forecastObject.get("informGrade").toString();

        OverallDTO data = new OverallDTO(imageUrls, informOverall, informGrade);

        return new ResponseDTO(200, HttpStatus.OK, "전국", data);
    }
}
