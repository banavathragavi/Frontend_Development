package com.example.studentdemo;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class StudentDAO {
	
	private static SessionFactory factory =
            new Configuration().configure().buildSessionFactory();

    private Session getSession() {
        return factory.openSession();
    }
    
    public void insert(Student s) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(s);

        tx.commit();
        session.close();
    }
    
    public Student findById(int id) {
        Session session = getSession();

        Student student = session.find(Student.class, id);

        session.close();
        return student;
    }
    
    public List<Student> findAll() {
        Session session = getSession();

        List<Student> student = session
                .createQuery("from Student", Student.class)
                .list();

        session.close();
        return student;
    }
    
    public void update(Student s) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(s);

        tx.commit();
        session.close();
    }
    
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Student student = session.find(Student.class, id);
        if (student != null) {
            session.remove(student);
        }

        tx.commit();
        session.close();
    }
    

}
