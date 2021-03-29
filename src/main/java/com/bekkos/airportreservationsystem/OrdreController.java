package com.bekkos.airportreservationsystem;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class OrdreController {

    ArrayList<Ordre> ordreList = new ArrayList<>();

    @PostMapping("/submitOrder")
    public void submitOrder (Ordre ordre) {
        ordreList.add(ordre);
    }

    @GetMapping("/getOrders")
    public ArrayList<Ordre> getOrdre() {
        return ordreList;
    }
}
