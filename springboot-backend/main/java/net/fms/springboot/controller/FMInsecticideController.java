package net.fms.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.fms.springboot.exception.ResourceNotFoundException;
import net.fms.springboot.model.FMEquipment;
import net.fms.springboot.model.FMInsecticide;
import net.fms.springboot.repository.FMInsecticideRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v3/")  

public class FMInsecticideController {
	@Autowired
	private FMInsecticideRepository fmInsecticideRepository;

	// get all employees
	@GetMapping("/listinsecticides")
	public List<FMInsecticide> getAllInsecticides(){
		return fmInsecticideRepository.findAll();

	}


	@PostMapping("/savein")
	public void saveInsecticides (@RequestBody FMInsecticide  fmInsecticide ) 
	{
		 fmInsecticideRepository.save(fmInsecticide);
	}
	
	
	
	// get equipment by id rest api
	@GetMapping("/listinsecticides/{id}")
	public ResponseEntity<FMInsecticide> getInsecticideById(@PathVariable Long id)
	{
		FMInsecticide fmInsecticide = fmInsecticideRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Data does not exist or id :" + id));
		return ResponseEntity.ok(fmInsecticide);
	}
		
		@PutMapping("/listinsecticides/{id}")
		public ResponseEntity<FMInsecticide> updateInsecticide(@PathVariable Long id, @RequestBody FMInsecticide inDetails){
			FMInsecticide fmInsecticide = fmInsecticideRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Data does not exist with id :" + id));
			
	
			fmInsecticide.setInName(inDetails.getInName());
			fmInsecticide.setInToxicity(inDetails.getInToxicity());
			fmInsecticide.setInType(inDetails.getInType());
			fmInsecticide.setInDetails(inDetails.getInDetails());
		
			FMInsecticide updatedfmInsecticide = fmInsecticideRepository.save(fmInsecticide);
			return ResponseEntity.ok(updatedfmInsecticide);
		}  
		
		// delete equipment rest api
		@DeleteMapping("/listinsecticides/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteInsecticide(@PathVariable Long id)
		{
			FMInsecticide fmInsecticide = fmInsecticideRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Data does not exist with id :" + id));
			
			fmInsecticideRepository.delete(fmInsecticide);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	

	
}
