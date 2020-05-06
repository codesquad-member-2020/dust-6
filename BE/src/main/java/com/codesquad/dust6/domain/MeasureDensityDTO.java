package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class MeasureDensityDTO {

    @NotEmpty
    private String dataTime;

    @NotEmpty
    private int pm10Value;

    @NotEmpty
    private int pm10Grade;

    public MeasureDensityDTO(String dataTime, int pm10Value, int pm10Grade) {
        this.dataTime = dataTime;
        this.pm10Value = pm10Value;
        this.pm10Grade = pm10Grade;
    }
}
