package com.fitzone.controller;

import com.fitzone.model.JoinFormSubmission;
import com.fitzone.repository.JoinFormRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/join")
@CrossOrigin(origins = "*")
public class JoinFormController {

    private final JoinFormRepository repository;

    public JoinFormController(JoinFormRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<String> submitForm(@RequestBody JoinFormSubmission formSubmission) {
    System.out.println("📥 Received: " + formSubmission.getName() + ", "
        + formSubmission.getEmail() + ", "
        + formSubmission.getPhone() + ", "
        + formSubmission.getMembershipPlan() + ", "
        + formSubmission.getFitnessGoal());
    repository.save(formSubmission);
    return ResponseEntity.ok("Form submitted successfully");
    }

    @GetMapping
    public List<JoinFormSubmission> getMembers() {
        return repository.findAll();
    }
}
