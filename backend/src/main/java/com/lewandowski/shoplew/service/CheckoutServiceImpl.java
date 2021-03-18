package com.lewandowski.shoplew.service;

import com.lewandowski.shoplew.dto.Purchase;
import com.lewandowski.shoplew.dto.PurchaseResponse;
import com.lewandowski.shoplew.entity.Customer;
import com.lewandowski.shoplew.entity.Order;
import com.lewandowski.shoplew.entity.OrderItem;
import com.lewandowski.shoplew.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(order::addOrderItem);

        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Customer customer = purchase.getCustomer();
        customer.addOrder(order);

        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
