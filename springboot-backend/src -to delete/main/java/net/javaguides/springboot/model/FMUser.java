package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FMSUser")
public class FMUser {
	    	 
    	 @Id
    	 @GeneratedValue(strategy = GenerationType.IDENTITY)
    		private long id;
    		
    		@Column(name = "full_Name")
    		private String fullName;

    		@Column(name = "user_Name")
    		private String userName;
    		
    		@Column(name = "user_Password")
    		private String userPassword;
    		    		 		
    		@Column(name = "email_id")
    		private String emailId;
    		
    		public FMUser() {
    			
    		}
    		
    		public FMUser(String fullName, String userName, String userPassword, String emailId) {
    			super();
    			this.fullName = fullName;
    			this.userName = userName;
    			this.userPassword = userPassword;
    			this.emailId = emailId;
    		}

			public long getId() {
				return id;
			}

			public void setId(long id) {
				this.id = id;
			}

			public String getFullName() {
				return fullName;
			}

			public void setFullName(String fullName) {
				this.fullName = fullName;
			}

			public String getUserName() {
				return userName;
			}

			public void setUserName(String userName) {
				this.userName = userName;
			}

			public String getUserPassword() {
				return userPassword;
			}

			public void setUserPassword(String userPassword) {
				this.userPassword = userPassword;
			}

			public String getEmailId() {
				return emailId;
			}

			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}
    		

}
