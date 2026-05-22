package com.petadoption.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petadoption.backend.entity.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

}
