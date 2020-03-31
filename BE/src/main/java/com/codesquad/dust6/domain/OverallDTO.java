package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class OverallDTO {
    private List<String> imageUrls;
    private String informOverall;
    private String informGrade;

    public OverallDTO(List<String> imageUrls, String informOverall, String informGrade) {
        this.imageUrls = imageUrls;
        this.informOverall = informOverall;
        this.informGrade = informGrade;
    }
}
