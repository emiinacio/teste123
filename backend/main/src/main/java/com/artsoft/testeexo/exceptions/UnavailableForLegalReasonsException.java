package com.artsoft.testeexo.exceptions;

import javax.annotation.processing.Generated;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Generated(value = "com.exocode.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@ResponseStatus(code = HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS)
public class UnavailableForLegalReasonsException extends RuntimeException {
}