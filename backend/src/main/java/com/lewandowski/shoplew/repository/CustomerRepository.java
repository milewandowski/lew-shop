package com.lewandowski.shoplew.repository;

import com.lewandowski.shoplew.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
