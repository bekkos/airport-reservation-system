package com.bekkos.airportreservationsystem;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/reservations")
    public String reservations() {
        return "reservations.html";
    }

}
