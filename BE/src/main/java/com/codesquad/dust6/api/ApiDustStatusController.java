package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.Location;
import com.codesquad.dust6.domain.ResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/dust-status")
@RestController
public class ApiDustStatusController {

    //tm 좌표 기준 가장 가까운 측정소 목록
    @GetMapping("/locations")
    public String locations(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longitude) {
        return "redirect:/공공api/측정소목록";
    }

    @GetMapping("/공공api/측정소목록")
    public List<Location> locations() {
        return null;
    }

    //측정소 목록 중 가장 가까운 측정소 1개
    @GetMapping("location")
    private Location location(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longitude) {
        locations(latitude, longitude);
        return null;
    }

    //측정소의 미세먼지 상태
    @GetMapping("")
    public ResponseDTO getStatus(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longitude) {
        String stationName = location(latitude, longitude).getStationName();
        return "redirect:/공공api/측정소_이름";
    }
}
