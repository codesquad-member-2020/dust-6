package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ForecastDTO {
    private String informOverall;
    private String informGrade;
    private List<String> imageUrls = new ArrayList<>();

    public ForecastDTO(String informOverall, String informGrade, List<String> imageUrls) {
        this.informOverall = informOverall;
        this.informGrade = informGrade;
        this.imageUrls = imageUrls;
    }

    public String getInformOverall() {
        return informOverall;
    }

    public void setInformOverall(String informOverall) {
        this.informOverall = informOverall;
    }

    public String getInformGrade() {
        return informGrade;
    }

    public void setInformGrade(String informGrade) {
        this.informGrade = informGrade;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }
}
