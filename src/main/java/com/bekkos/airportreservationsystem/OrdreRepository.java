package com.bekkos.airportreservationsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class OrdreRepository {

    @Autowired
    private JdbcTemplate db;

    public void insertOrderInDatabase(Ordre ordre) {
        String sql = "INSERT INTO Orders (customerid, firstname, lastname, email, phone, departure, arrival, departure_date) VALUES (?,?,?,?,?,?,?,?)";
        db.update(sql, ordre.getCustomerId(), ordre.getFirstName(), ordre.getLastName(), ordre.getEmail(), ordre.getPhone(), ordre.getDeparture(), ordre.getArrival(), ordre.getDepartureDate());
    }

    public ArrayList<Ordre> getAllCustomerOrders(String customerId) {
        String sql = String.format("SELECT * FROM Orders WHERE customerid = '%s'", customerId);
        ArrayList<Ordre> allCustomerOrders = (ArrayList<Ordre>) db.query(sql, new BeanPropertyRowMapper(Ordre.class));
        return allCustomerOrders;
    }

    public void deleteOrder(Ordre ordre) {
        String sql = "DELETE FROM Orders WHERE (customerid = ? AND departure = ? AND arrival = ? AND departure_date = ?)";
        db.update(sql, ordre.getCustomerId(), ordre.getDeparture(), ordre.getArrival(), ordre.getDepartureDate());
    }


}
