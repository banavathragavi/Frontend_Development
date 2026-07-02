package com.example.studentdemo;

import java.util.List;
import java.util.Scanner;



public class App {
	
	 public static void main(String[] args) {

	        Scanner sc = new Scanner(System.in);
	        StudentDAO dao = new StudentDAO();

	        while (true) {

	            System.out.println("\n===== PRODUCT MENU =====");
	            System.out.println("1. Insert Student");
	            System.out.println("2. Find Student By ID");
	            System.out.println("3. Find All Student");
	            System.out.println("4. Update Student");
	            System.out.println("5. Delete Student");
	            System.out.println("6. Exit");

	            System.out.print("Enter Choice: ");
	            int choice = sc.nextInt();

	            switch (choice) {

	                case 1:
	                    Student s1 = new Student();

	                    System.out.print("Enter Student Id: ");
	                    s1.setStd_id(sc.nextInt());

	                    sc.nextLine();

	                    System.out.print("Enter Student Name: ");
	                    s1.setStdName(sc.nextLine());

	                    System.out.print("Enter Student Email: ");
	                    s1.setEmail(sc.nextLine());
	                    
	                    System.out.println("Enter Student Course: ");
	                    s1.setCourse(sc.nextLine());
	                    
	                    System.out.println("Enter Student Age: ");
	                    s1.setAge(sc.nextInt());

	                    dao.insert(s1);
	                    System.out.println("Product Inserted Successfully");
	                    break;

	                case 2:
	                    System.out.print("Enter Student Id: ");
	                    int id = sc.nextInt();

	                    Student student = dao.findById(id);

	                    if (student != null) {
	                        System.out.println(student);
	                    } else {
	                        System.out.println("Student Not Found");
	                    }
	                    break;

	                case 3:
	                    List<Student> students = dao.findAll();

	                    for (Student s : students) {
	                        System.out.println(s);
	                    }
	                    break;

	                case 4:
	                    Student s2 = new Student();

	                    System.out.print("Enter Student Id: ");
	                    s2.setStd_id(sc.nextInt());

	                    sc.nextLine();

	                    System.out.print("Enter New Student Name: ");
	                    s2.setStdName(sc.nextLine());

	                    System.out.print("Enter New Student Email: ");
	                    s2.setEmail(sc.nextLine());
	                    
	                    System.out.println("Enter New Student Course: ");
	                    s2.setCourse(sc.nextLine());
	                    
	                    System.out.println("Enter New Student Age: ");
	                    s2.setAge(sc.nextInt());

	                    dao.update(s2);
	                    System.out.println("Student Updated Successfully");
	                    break;

	                case 5:
	                    System.out.print("Enter Student Id: ");
	                    int deleteId = sc.nextInt();

	                    dao.delete(deleteId);
	                    System.out.println("Student Deleted Successfully");
	                    break;

	                case 6:
	                    System.out.println("Exiting Application...");
	                    sc.close();
	                    System.exit(0);
	                    break;

	                default:
	                    System.out.println("Invalid Choice");
	            }
	        }
	    }

}


