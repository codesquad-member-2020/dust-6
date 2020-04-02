package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.CoordinateDTO;
import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import com.codesquad.dust6.service.LocationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@RequestMapping("/api/dust-status")
@RestController
public class ApiDustStatusController {

    //tm 좌표 기준 가장 가까운 측정소 목록
    @GetMapping("/locations")
    public Object locations() throws ParseException, JsonProcessingException, URISyntaxException {
        return LocationService.test();
    }

    @GetMapping("/공공api/측정소목록")
    public List<DistanceDTO> locationssd() {
        return null;
    }

    //측정소 목록 중 가장 가까운 측정소 1개
    @GetMapping("location")
    private DistanceDTO location(CoordinateDTO coordinate) {
//        locations(coordinate);
        return null;
    }

    //측정소의 미세먼지 상태
    @GetMapping("")
    public ResponseDTO getStatus(CoordinateDTO coordinate) {
        String stationName = location(coordinate).getStationName();
        return null;
//        return "redirect:/공공api/측정소_이름";
    }
}
