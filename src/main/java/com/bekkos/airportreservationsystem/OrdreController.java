package com.bekkos.airportreservationsystem;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@RestController
public class OrdreController {



    @PostMapping("/submitOrder")
    public void submitOrder (Ordre ordre, HttpSession session) {
        ArrayList<Ordre> ordreList = (ArrayList<Ordre>) session.getAttribute("ORDRE_LIST");
        if (ordreList == null) {
            ordreList = new ArrayList<>();
            session.setAttribute("ORDRE_LIST", ordreList);
        }
        ordreList.add(ordre);
        session.setAttribute("ORDRE_LIST", ordreList);
    }

    @GetMapping("/getOrders")
    public ArrayList<Ordre> getOrdre(HttpSession session) {
        ArrayList<Ordre> ordreList = (ArrayList<Ordre>) session.getAttribute("ORDRE_LIST");
        if(ordreList == null) {
            ordreList = new ArrayList<>();
            session.setAttribute("ORDRE_LIST", ordreList);
            return ordreList;
        }
        return ordreList;
    }

    @GetMapping("/delete")
    public void delete(@RequestParam int id, HttpSession session) {
        ArrayList<Ordre> ordreList = (ArrayList<Ordre>) session.getAttribute("ORDRE_LIST");
        if(ordreList == null) {
            return;
        }
        ordreList.remove(id);
        session.setAttribute("ORDRE_LIST", ordreList);
    }


}
