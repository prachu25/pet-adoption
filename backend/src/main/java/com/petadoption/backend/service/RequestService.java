package com.petadoption.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petadoption.backend.entity.Request;
import com.petadoption.backend.repository.PetRepository;
import com.petadoption.backend.repository.RequestRepository;
import com.petadoption.backend.repository.UserRepository;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepo;

    @Autowired
    private PetRepository petRepo;

    @Autowired
    private UserRepository userRepo;

    // Get All Requests
    public List<Request> getAllRequests() {
        return requestRepo.findAll();

    }

    // Send Adoption Request
    public String sendRequest(Request req) {

        // check pet exists
        if (!petRepo.existsById(req.getPetId())) {
            return "Pet Not Found";
        }

        // check requester exists
        if (!userRepo.existsById(req.getRequesterId())) {
            return "user not found";
        }

        // Default Status
        req.setStatus("Pending");

        requestRepo.save(req);
        return "Request Send Successfully";
    }

    // Update Request Status
    public String updateRequestStatus(Long id, Request updateRequest) {

        Request existingRequest = requestRepo.findById(id).orElse(null);

        if (existingRequest == null) {
            return "Request Not Found";
        }

        existingRequest.setStatus(updateRequest.getStatus());

        requestRepo.save(existingRequest);

        return "Request Status Update";
    }

}
