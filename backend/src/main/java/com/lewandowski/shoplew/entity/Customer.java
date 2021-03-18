package com.lewandowski.shoplew.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "customer")
@Getter @Setter
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    private Set<Order> orders = new HashSet<>();

    public void addOrder(Order order) {
        if(order == null) {
            throw new NullPointerException("Order cannot be null");
        }
        createNewOrdersHashSetIfNull();
        this.orders.add(order);
        order.setCustomer(this);
    }

    private void createNewOrdersHashSetIfNull() {
        if (this.orders == null) {
            this.orders = new HashSet<>();
        }
    }

}
