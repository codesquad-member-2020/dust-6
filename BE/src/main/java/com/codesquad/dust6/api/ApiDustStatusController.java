package com.codesquad.dust6.api;
import com.codesquad.dust6.domain.CoordinateDTO;
import com.codesquad.dust6.domain.ResponseDTO;
import com.codesquad.dust6.service.LocationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.net.URISyntaxException;

@RequestMapping("/api/dust-status")
@RestController
public class ApiDustStatusController {

    private Logger logger = LoggerFactory.getLogger(ApiDustStatusController.class);

    //tm 좌표 기준 가장 가까운 측정소 목록
    @GetMapping("/locations")
    public Object locations(CoordinateDTO coordinate) throws IOException, URISyntaxException {
        CoordinateDTO tmCoordinate = LocationService.coordinate(coordinate);
        return LocationService.distances(tmCoordinate);
    }
  
    //측정소 목록 중 가장 가까운 측정소 1개
    public String location(CoordinateDTO coordinate) throws IOException, URISyntaxException {
        CoordinateDTO tmCoordinate = LocationService.coordinate(coordinate);
        return LocationService.distance(tmCoordinate).getStationName();
    }
  
    //측정소의 미세먼지 상태
    @GetMapping("location")
    public ResponseDTO getStatus(CoordinateDTO coordinate) throws URISyntaxException, IOException {
        String stationName = location(coordinate);
        return new ResponseDTO(200, HttpStatus.OK, stationName, LocationService.dustStatus(stationName));
    }
}
