package net.fms.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.fms.springboot.model.FMEquipment;
@Repository
public interface FMEquipmentRepository extends JpaRepository<FMEquipment,Long>{

}
