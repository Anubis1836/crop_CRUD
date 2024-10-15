package net.javaguides.springboot.controller;

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

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.FMCrops;
import net.javaguides.springboot.model.FMEquipment;
import net.javaguides.springboot.repository.FMEquipmentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/api/v4/")
public class FMEquipmentController {
	
	@Autowired
	private FMEquipmentRepository fmEquipmentRepository;

	// get all employees
	@GetMapping("/listequipments")
	public List<FMEquipment> getAllfmEquipments(){
		return fmEquipmentRepository.findAll();

	}


	@PostMapping("/saveeq")
	public void saveEquipments (@RequestBody FMEquipment  fmEquipment ) 
	{
		fmEquipmentRepository.save(fmEquipment);
	}
	
	
	
	// get equipment by id rest api
	@GetMapping("/listequipments/{id}")
	public ResponseEntity<FMEquipment> getEquipmentById(@PathVariable Long id)
	{
		FMEquipment fmEquipment = fmEquipmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Data does not exist or id :" + id));
		return ResponseEntity.ok(fmEquipment);
	}
		
		@PutMapping("/listequipments/{id}")
		public ResponseEntity<FMEquipment> updateEquipment(@PathVariable Long id, @RequestBody FMEquipment eqDetails){
			FMEquipment fmEquipment = fmEquipmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			
			fmEquipment.setEqImageFileName(eqDetails.getEqImageFileName());
			fmEquipment.setEqName(eqDetails.getEqName());
			fmEquipment.setEqPrice(eqDetails.getEqPrice());
			fmEquipment.setEqDetails(eqDetails.getEqDetails());
			
			FMEquipment updatedfmEquipment = fmEquipmentRepository.save(fmEquipment);
			return ResponseEntity.ok(updatedfmEquipment);
		}
		
		// delete equipment rest api
		@DeleteMapping("/listequipments/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEquipment(@PathVariable Long id)
		{
			FMEquipment fmEquipment = fmEquipmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Data does not exist with id :" + id));
			
			fmEquipmentRepository.delete(fmEquipment);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
}
