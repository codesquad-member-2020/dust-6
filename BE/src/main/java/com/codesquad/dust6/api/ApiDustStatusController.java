package com.codesquad.dust6.api;

import com.codesquad.dust6.domain.ResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
public class ApiDustStatusController {

    @GetMapping("/api/location/dust-status")
    public ResponseDTO getStatus(@RequestParam("latitude") BigInteger latitude, @RequestParam("longitude") BigInteger longitude) {
        return null;
    }
}
