package com.bekkos.airportreservationsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@RestController
public class OrdreController {

    @Autowired
    OrdreRepository rep;

    @PostMapping("/submitOrder")
    public void submitOrder (Ordre ordre, HttpSession session) {
        ArrayList<Ordre> ordreList = (ArrayList<Ordre>) session.getAttribute("ORDRE_LIST");
        ordre.setCustomerId(session.getId());
        if (ordreList == null) {
            ordreList = new ArrayList<>();
            session.setAttribute("ORDRE_LIST", ordreList);
        }
        ordreList.add(ordre);
        session.setAttribute("ORDRE_LIST", ordreList);
        rep.insertOrderInDatabase(ordre);
    }

    @GetMapping("/getOrders")
    public ArrayList<Ordre> getOrdre(HttpSession session) {
        ArrayList<Ordre> listOfOrders = rep.getAllCustomerOrders(session.getId());
        for(Ordre o : listOfOrders) {
            o.setCustomerId("secret;)");
        }
        return listOfOrders;
    }

    @PostMapping("/delete")
    public void delete(Ordre ordre, HttpSession session) {
        ordre.setCustomerId(session.getId());
        rep.deleteOrder(ordre);
    }


}
