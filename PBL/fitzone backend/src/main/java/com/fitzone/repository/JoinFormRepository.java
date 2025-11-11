package com.fitzone.repository;

import com.fitzone.model.JoinFormSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JoinFormRepository extends JpaRepository<JoinFormSubmission, Long> {
}
