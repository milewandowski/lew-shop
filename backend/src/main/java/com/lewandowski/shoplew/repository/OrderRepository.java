package com.lewandowski.shoplew.repository;

import com.lewandowski.shoplew.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(collectionResourceRel = "order", path = "order")
@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByOrderTrackingNumber(@RequestParam("orderTrackingNumber") String orderTrackingNumber);
}
