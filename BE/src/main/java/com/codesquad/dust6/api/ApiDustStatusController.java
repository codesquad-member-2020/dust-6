package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.CoordinateDTO;
import com.codesquad.dust6.domain.DistanceDTO;
import com.codesquad.dust6.domain.MeasureDensityDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import com.codesquad.dust6.service.LocationService;
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
    public Object locations() throws IOException, URISyntaxException {
        return LocationService.distances();
    }

    //측정소 목록 중 가장 가까운 측정소 1개
    public String location() throws IOException, URISyntaxException {
        return LocationService.distance().getStationName();
    }

    //측정소의 미세먼지 상태
    @GetMapping("location")
    public Object getStatus(CoordinateDTO coordinate) throws URISyntaxException {
        return LocationService.dustStatus();
    }
}
