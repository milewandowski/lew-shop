package com.lewandowski.shoplew.dto;

import com.lewandowski.shoplew.entity.Address;
import com.lewandowski.shoplew.entity.Customer;
import com.lewandowski.shoplew.entity.Order;
import com.lewandowski.shoplew.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
