package com.petadoption.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petadoption.backend.entity.Pets;

@Repository
public interface PetRepository extends JpaRepository<Pets, Long> {

}
