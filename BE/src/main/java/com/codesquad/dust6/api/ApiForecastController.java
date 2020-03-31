package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.ResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiForecastController {

    @GetMapping("/api/forecast")
    public ResponseDTO getForecast() {
        return null;
    }
}
