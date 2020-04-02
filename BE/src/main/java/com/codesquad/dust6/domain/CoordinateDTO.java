package com.codesquad.dust6.domain;

public class CoordinateDTO {
    private float latitude;
    private float longitude;

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "CoordinateDTO{" +
                "latitude=" + latitude +
                ", longitude=" + longitude +
                '}';
    }
}
