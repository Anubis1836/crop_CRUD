package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.FMUser;

@Repository 
public interface FMUserRepository extends JpaRepository<FMUser,Long>{

	FMUser findByUserNameAndUserPassword(String username, String password);

}
