package net.fms.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.fms.springboot.model.FMInsecticide;
@Repository
public interface FMInsecticideRepository extends JpaRepository <FMInsecticide, Long> {

}
