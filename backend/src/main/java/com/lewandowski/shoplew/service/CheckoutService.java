package com.lewandowski.shoplew.service;

import com.lewandowski.shoplew.dto.Purchase;
import com.lewandowski.shoplew.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
