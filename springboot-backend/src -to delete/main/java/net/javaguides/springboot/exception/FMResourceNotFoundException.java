package net.javaguides.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class FMResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public FMResourceNotFoundException(String message) {
		super(message);
	}
}
