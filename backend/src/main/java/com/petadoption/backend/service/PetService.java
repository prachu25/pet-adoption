package com.petadoption.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petadoption.backend.entity.Pets;
import com.petadoption.backend.repository.PetRepository;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepo;

    // Get All Pets
    public List<Pets> getallPets() {
        return petRepo.findAll();
    }

    // Save Pet
    public String addPet(Pets pet) {

        if (pet.getAge() <= 0) {
            return "Invalid Pet Age";
        }

        // Default Status
        pet.setAdoptionStatus("Available");

        petRepo.save(pet);
        return "Pet Added Successfully";
    }

    // Get Pet By ID - OPTIONAL
    public Pets getPetById(Long id) {
        return petRepo.findById(id).orElse(null);
    }

    // Delete Pet
    public String deletePet(Long id) {

        // check if pet exists
        if (!petRepo.existsById(id)) {
            return "Pet Not found";
        }

        petRepo.deleteById(id);

        return "Pet Deleted Successfully";
    }

    // Update Pet Status
    public String updatePetStatus(Long id, Pets updatedPet) {

        Pets existingPets = petRepo.findById(id).orElse(null);

        if (existingPets == null) {
            return "Pet Not Found";
        }

        existingPets.setAdoptionStatus(updatedPet.getAdoptionStatus());

        petRepo.save(existingPets);

        return "Pet Status Updated";
    }

}
