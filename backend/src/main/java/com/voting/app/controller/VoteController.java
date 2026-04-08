package com.voting.app.controller;

import com.voting.app.model.Candidate;
import com.voting.app.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class VoteController {

    @Autowired
    private CandidateRepository candidateRepository;

    @GetMapping("/candidates")
    public ResponseEntity<List<Candidate>> getCandidates() {
        return ResponseEntity.ok(candidateRepository.findAll());
    }

    @PostMapping("/vote")
    public ResponseEntity<?> castVote(@RequestBody Map<String, Object> payload) {
        Long candidateId = payload.get("candidateId") != null ? Long.valueOf(payload.get("candidateId").toString()) : null;
        String username = (String) payload.get("username");

        if (candidateId == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Candidate ID missing"));
        }
        
        Optional<Candidate> candidateOptional = candidateRepository.findById(candidateId);
        if (candidateOptional.isPresent()) {
            Candidate candidate = candidateOptional.get();
            candidate.setVoteCount(candidate.getVoteCount() + 1);
            if (username != null && !username.isEmpty()) {
                candidate.getVoters().add(username);
            }
            candidateRepository.save(candidate);
            return ResponseEntity.ok(Map.of("message", "Vote cast successfully"));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "Candidate not found"));
    }
}
