package com.voting.app;

import com.voting.app.model.Candidate;
import com.voting.app.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private CandidateRepository candidateRepository;

    public void run(String... args) throws Exception {
        // Ensure candidates 3 and 4 are removed from the database
        try {
            candidateRepository.deleteById(3L);
        } catch (Exception e) {}
        try {
            candidateRepository.deleteById(4L);
        } catch (Exception e) {}

        // Update existing candidates if they were already seeded
        try {
            candidateRepository.findById(1L).ifPresent(c -> {
                c.setName("mohan");
                c.setBranch("Bangalore HQ");
                candidateRepository.save(c);
            });
            candidateRepository.findById(2L).ifPresent(c -> {
                c.setName("phani");
                c.setBranch("MI");
                candidateRepository.save(c);
            });
        } catch (Exception e) {}

        if (candidateRepository.count() == 0) {
            Candidate c1 = new Candidate();
            c1.setName("mohan");
            c1.setBranch("Bangalore HQ");
            c1.setVoteCount(0);
            candidateRepository.save(c1);

            Candidate c2 = new Candidate();
            c2.setName("phani");
            c2.setBranch("MI");
            c2.setVoteCount(0);
            candidateRepository.save(c2);

            System.out.println("Seeded database with new candidates and branches.");
        }
    }
}
