package com.petadoption.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petadoption.backend.entity.Request;
import com.petadoption.backend.service.RequestService;

@RestController
@RequestMapping("/requests")
public class RequestController {

    @Autowired
    private RequestService reqServ;

    // All Request
    @GetMapping("/all")
    public List<Request> getAllRequests() {
        return reqServ.getAllRequests();
    }

    // Send Request
    @PostMapping("/send")
    public String sendRequest(@RequestBody Request req) {
        return reqServ.sendRequest(req);
    }

    // Update Request Status
    @PutMapping("/update-status/{id}")
    public String updateRequestStatus(@PathVariable Long id, @RequestBody Request req) {
        return reqServ.updateRequestStatus(id, req);
    }

}
