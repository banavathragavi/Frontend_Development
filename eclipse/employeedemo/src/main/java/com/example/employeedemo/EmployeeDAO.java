package com.example.employeedemo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class EmployeeDAO {


	//private static SessionFactory factory =
      //      new Configuration().configure().buildSessionFactory();
	
	private static SessionFactory factory =
	        new Configuration()
	        .configure("hibernate.cfg.xml")
	        .addAnnotatedClass(Employee.class)
	        .buildSessionFactory();

    private Session getSession() {
        return factory.openSession();
    }
    // Insert
    public void insert(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(e);

        tx.commit();
        session.close();
    }

    // Find By Id
    public Employee findById(int id) {
        Session session = getSession();

        Employee employee = session.find(Employee.class, id);

        session.close();
        return employee;
    }

    // Find All
    public List<Employee> findAll() {
        Session session = getSession();

        List<Employee> employees = session
                .createQuery("from Employee", Employee.class)
                .list();

        session.close();
        return employees;
    }

    // Update
    public void update(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(e);

        tx.commit();
        session.close();
    }

    // Delete
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Employee employee = session.find(Employee.class, id);
        if (employee != null) {
            session.remove(employee);
        }

        tx.commit();
        session.close();
    }
}


