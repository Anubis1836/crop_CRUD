package net.javaguides.springboot.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.web.bind.annotation.PutMapping;
import net.javaguides.springboot.model.FMUser;
import net.javaguides.springboot.repository.FMUserRepository;
//import net.javaguides.springboot.exception.FMResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")

public class FMUserController {
	
	@Autowired
	private FMUserRepository fmUserRepository;

	// get all employees
	@GetMapping("/listusers")
	public List<FMUser> getAllUsers(){
		return fmUserRepository.findAll();
	}
		
	@GetMapping("/login")
	public FMUser authenticateUser (@RequestBody FMUser  fmUser ) 
	{
		return fmUserRepository.findByUserNameAndUserPassword(fmUser.getUserName(), fmUser.getUserPassword());
	}
	
	@PostMapping("/save")
	public void saveUser (@RequestBody FMUser  fmUser ) 
	{
		 fmUserRepository.save(fmUser);
	}
}