package com.api.springapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class BackSupportApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackSupportApplication.class, args);
		System.out.println();
	}
	@GetMapping("/hello")
	public String Hello(){
		return "hello Zola";
	}
}
