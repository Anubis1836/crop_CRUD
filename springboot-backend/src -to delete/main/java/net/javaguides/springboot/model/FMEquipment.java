package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "fmequipment")

public class FMEquipment {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	   	private long id;
	    		
	    @Column(name = "eq_image_file_name")
	    private String eqImageFileName;

	    @Column(name = "eq_name")
	    private String eqName;
	    		
	    @Column(name = "eq_price")
	    private String eqPrice;
	    		    		 		
	    @Column(name = "eq_details")
	    private String eqDetails;
	    		
	    public FMEquipment() {
	    			
	    }
		public FMEquipment(String eqImageFileName, String eqName, String eqPrice, String eqDetails) {
			super();
	    	this.eqImageFileName = eqImageFileName;
	    	this.eqName = eqName;
	    	this.eqPrice = eqPrice;
	    	this.eqDetails = eqDetails;
	    }
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getEqImageFileName() {
			return eqImageFileName;
		}
		public void setEqImageFileName(String eqImageFileName) {
			this.eqImageFileName = eqImageFileName;
		}
		public String getEqName() {
			return eqName;
		}
		public void setEqName(String eqName) {
			this.eqName = eqName;
		}
		public String getEqPrice() {
			return eqPrice;
		}
		public void setEqPrice(String eqPrice) {
			this.eqPrice = eqPrice;
		}
		public String getEqDetails() {
			return eqDetails;
		}
		public void setEqDetails(String eqDetails) {
			this.eqDetails = eqDetails;
		}
				
}
