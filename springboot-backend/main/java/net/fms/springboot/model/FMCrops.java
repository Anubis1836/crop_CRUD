package net.fms.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FMCrops")
public class FMCrops {
	    	 
    	 @Id
    	 @GeneratedValue(strategy = GenerationType.IDENTITY)
    		private long id;
    		
    		@Column(name = "image_File_Name")
    		private String imageFileName;

    		@Column(name = "crop_Name")
    		private String cropName;
    		
    		@Column(name = "season")
    		private String season;
    		    		 		
    		@Column(name = "crop_Type") 
    		private String cropType;
    		
    		public FMCrops() {
    			
    		}
			public FMCrops(String imageFileName, String cropName, String season, String cropType) {
    			super();
    			this.imageFileName = imageFileName;
    			this.cropName = cropName;
    			this.season = season;
    			this.cropType = cropType;
    		}
    		public long getId() {
				return id;
			}

			public void setId(long id) {
				this.id = id;
			}

			public String getImageFileName() {
				return imageFileName;
			}

			public void setImageFileName(String imageFileName) {
				this.imageFileName = imageFileName;
			}

			public String getCropName() {
				return cropName;
			}

			public void setCropName(String cropName) {
				this.cropName = cropName;
			}

			public String getSeason() {
				return season;
			}

			public void setSeason(String season) {
				this.season = season;
			}

			public String getCropType() {
				return cropType;
			}

			public void setCropType(String cropType) {
				this.cropType = cropType;
			}
		
}

