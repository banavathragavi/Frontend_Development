package com.example.productdemo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class ProductDAO {


    private static SessionFactory factory =
            new Configuration().configure().buildSessionFactory();

    private Session getSession() {
        return factory.openSession();
    }

    // Insert
    public void insert(Product p) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(p);

        tx.commit();
        session.close();
    }

    // Find By Id
    public Product findById(int id) {
        Session session = getSession();

        Product product = session.find(Product.class, id);

        session.close();
        return product;
    }

    // Find All
    public List<Product> findAll() {
        Session session = getSession();

        List<Product> products = session
                .createQuery("from Product", Product.class)
                .list();

        session.close();
        return products;
    }

    // Update
    public void update(Product p) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(p);

        tx.commit();
        session.close();
    }

    // Delete
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Product product = session.find(Product.class, id);
        if (product != null) {
            session.remove(product);
        }

        tx.commit();
        session.close();
    }
}