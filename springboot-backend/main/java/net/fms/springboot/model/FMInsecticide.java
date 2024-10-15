package net.fms.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "fminsecticide")

public class FMInsecticide {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	   	private long id;
	    		
	    @Column(name = "in_image_file_name")
	    private String inImageFileName;

	    @Column(name = "in_name")
	    private String inName;
	    		
	    @Column(name = "in_type")
	    private String inType;
	    		    		 		
	    @Column(name = "in_toxicity")
	    private String inToxicity;
	    		
	    @Column(name = "in_details")
	    private String inDetails;
	    
	    public FMInsecticide() {
	    			
	    }
		public FMInsecticide(String inImageFileName, String inName, String inType, String inToxicity, String inDetails) {
			super();
	    	this.inImageFileName = inImageFileName;
	    	this.inName = inName;
	    	this.inType = inType;
	    	this.inToxicity = inToxicity;
	    	this.inDetails = inDetails;
	    }
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getInImageFileName() {
			return inImageFileName;
		}
		public void setInImageFileName(String inImageFileName) {
			this.inImageFileName = inImageFileName;
		}
		public String getInName() {
			return inName;
		}
		public void setInName(String inName) {
			this.inName = inName;
		}
		public String getInType() {
			return inType;
		}
		public void setInType(String inType) {
			this.inType = inType;
		}
		public String getInToxicity() {
			return inToxicity;
		}
		public void setInToxicity(String inToxicity) {
			this.inToxicity = inToxicity;
		}
		public String getInDetails() {
			return inDetails;
		}
		public void setInDetails(String inDetails) {
			this.inDetails = inDetails;
		}
		
				
}
