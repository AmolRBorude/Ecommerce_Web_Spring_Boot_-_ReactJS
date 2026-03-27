package com.ecom.project.controller;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import com.razorpay.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    private static final String KEY = "rzp_test_XXXXXXXX";   
    private static final String SECRET = "XXXXXXXXXXXX";     

    @PostMapping("/create-order")
    public Map<String, Object> createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {

        int amount = (int) data.get("amount");

        RazorpayClient client = new RazorpayClient(KEY, SECRET);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); 
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "txn_123");

        Order order = client.orders.create(orderRequest);

        Map<String, Object> response = new HashMap<>();
        response.put("id", order.get("id"));
        response.put("amount", order.get("amount"));

        return response;
    }
}