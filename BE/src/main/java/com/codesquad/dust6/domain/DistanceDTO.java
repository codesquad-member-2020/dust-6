package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DistanceDTO {
    private String stationName;
    private double tm;

    public DistanceDTO(String stationName, double tm) {
        this.stationName = stationName;
        this.tm = tm;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public double getTm() {
        return tm;
    }

    public void setTm(double tm) {
        this.tm = tm;
    }
}
