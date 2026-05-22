package com.petadoption.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petadoption.backend.entity.Pets;
import com.petadoption.backend.service.PetService;

@RestController
@RequestMapping("/pets")
public class PetController {

    @Autowired
    private PetService petServ;

    @GetMapping("/all")
    public List<Pets> getAllPets() {
        return petServ.getallPets();
    }

    // Add Pet
    @PostMapping("/add")
    public String addpet(@RequestBody Pets pet) {
        return petServ.addPet(pet);
    }

    // Delete Pet
    @DeleteMapping("/delete/{id}")
    public String deletePet(@PathVariable Long id) {
        return petServ.deletePet(id);
    }

    // Update Pet Status
    @PutMapping("/update-status/{id}")
    public String updatePetStatus(@PathVariable Long id, @RequestBody Pets pet) {
        return petServ.updatePetStatus(id, pet);
    }

}
