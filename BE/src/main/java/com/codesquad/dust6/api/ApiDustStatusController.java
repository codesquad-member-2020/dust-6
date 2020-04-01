package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.MeasureDensityDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiDustStatusController {

    @GetMapping("/api/dust-status/location")
    public ResponseDTO getStatus(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longitude) {
        MeasureDensityDTO[] data = new MeasureDensityDTO[2];
        data[0] = new MeasureDensityDTO("2016-04-20 14:00", 55, 2);
        data[1] = new MeasureDensityDTO("2016-04-20 13:00", 61, 2);
        return new ResponseDTO(200, HttpStatus.OK, "종로구", data);
    }
}
