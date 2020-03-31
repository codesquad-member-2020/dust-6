package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.OverallDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ApiForecastController {

    @GetMapping("/api/forecast")
    public ResponseDTO forecast() {
        List<String> imageUrls = new ArrayList<>();
        imageUrls.add("http://www.airkorea.or.kr/file/viewImage/?atch_id=56593");
        imageUrls.add("http://www.airkorea.or.kr/file/viewImage/?atch_id=565235");
        imageUrls.add("http://www.airkorea.or.kr/file/viewImage/?atch_id=5346");

        String informOverall = "○[미세먼지] 전 권역의 농도가 전일보다 다소 낮을 것으로 예상됨.";
        String informGrade = "서울 : 예보없음,제주 : 예보없음,전남 : 예보없음,전북 : 예보없음";

        OverallDTO data = new OverallDTO(imageUrls, informOverall, informGrade);

        return new ResponseDTO(200, HttpStatus.OK, "전국", data);
    }
}
