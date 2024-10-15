package net.fms.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.fms.springboot.model.FMCrops;
@Repository
public interface FMCropRepository extends JpaRepository<FMCrops,Long>
{

}
