package com.lewandowski.shoplew.controller;

import com.lewandowski.shoplew.dto.Purchase;
import com.lewandowski.shoplew.dto.PurchaseResponse;
import com.lewandowski.shoplew.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/checkout")
public class CheckoutController {

    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        return checkoutService.placeOrder(purchase);
    }

}
