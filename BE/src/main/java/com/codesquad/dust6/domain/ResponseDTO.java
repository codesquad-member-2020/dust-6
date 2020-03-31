package com.codesquad.dust6.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class ResponseDTO {

    @NotEmpty
    private int code;

    @NotEmpty
    private HttpStatus message;

    @NotEmpty
    private String stationName;

    @NotEmpty
    private Object data;

    public ResponseDTO(int code, HttpStatus message, String stationName, Object data) {
        this.code = code;
        this.message = message;
        this.stationName = stationName;
        this.data = data;
    }
}