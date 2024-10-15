package net.javaguides.springboot.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import org.springframework.web.bind.annotation.PutMapping;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.FMCrops;
import net.javaguides.springboot.repository.FMCropRepository;
import net.javaguides.springboot.exception.FMResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v3/") 

public class FMCropController {
	@Autowired
	private FMCropRepository fmCropRepository;

	// get all crops
	@GetMapping("/listcrops")
	public List<FMCrops> getAllCrops(){
		fmCropRepository.findAll();
		return fmCropRepository.findAll();
	}


	@PostMapping("/savecrop")
	public FMCrops saveCrop (@RequestBody FMCrops  fmCrops ) 
	{
		 return fmCropRepository.save(fmCrops);
	}
	
	// get crop by id rest api
	@GetMapping("/listcrops/{id}")
	public ResponseEntity<FMCrops> getCropById(@PathVariable Long id) {
		FMCrops fmCrops = fmCropRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Data does not exist or id :" + id));
		return ResponseEntity.ok(fmCrops);
	}
		
	     // update crop rest api .....
		
		@PutMapping("/listcrops/{id}")
		public ResponseEntity<FMCrops> updateCrop(@PathVariable Long id, @RequestBody FMCrops cropDetails){
			FMCrops fmCrops = fmCropRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			
			fmCrops.setImageFileName(cropDetails.getImageFileName());
			fmCrops.setCropName(cropDetails.getCropName());
			fmCrops.setCropType(cropDetails.getCropType());
			fmCrops.setSeason(cropDetails.getSeason());
			
			FMCrops updatedfmCrops = fmCropRepository.save(fmCrops);
			return ResponseEntity.ok(updatedfmCrops);
		}
		
		// delete crop rest api
		@DeleteMapping("/listcrops/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCrop(@PathVariable Long id){
			FMCrops fmCrops = fmCropRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Data does not exist with id :" + id));
			
			fmCropRepository.delete(fmCrops);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
