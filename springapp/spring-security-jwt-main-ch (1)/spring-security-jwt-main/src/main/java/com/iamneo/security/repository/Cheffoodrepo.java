package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.iamneo.security.entity.Cheffood;

public interface Cheffoodrepo extends JpaRepository<Cheffood, Integer> {
	@Query(value="select * from chef_food where chefid=:s",nativeQuery=true)
	public List<Cheffood> getchefid(@Param("s") int chefid);
}

//	@Query("select * from chef_food where chefid= :n")
//	public List<Cheffood> getId(@Param("n")int chefid);
