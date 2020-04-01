package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Location {
    private String stationName;
    private float tm;

    public Location(String stationName, float tm) {
        this.stationName = stationName;
        this.tm = tm;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public float getTm() {
        return tm;
    }

    public void setTm(float tm) {
        this.tm = tm;
    }
}
