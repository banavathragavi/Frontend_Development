package com.example.employeedemo;


import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        EmployeeDAO dao = new EmployeeDAO();

        while (true) {

            System.out.println("\n=====  MENU =====");
            System.out.println("1. Insert Emplyee");
            System.out.println("2. Find Employee By ID");
            System.out.println("3. Find All Employees");
            System.out.println("4. Update Employee");
            System.out.println("5. Delete Employee");
            System.out.println("6. Exit");

            System.out.print("Enter Choice: ");
            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    Employee e1 = new Employee();

                    System.out.print("Enter Employee Id: ");
                    e1.setEmployeeid(sc.nextInt());

                    sc.nextLine();

                    System.out.print("Enter Employee Name: ");
                    e1.setEmployeeName(sc.nextLine());
                    

                    System.out.print("Enter Employee Department: ");
                    e1.setDepartment(sc.nextLine());
                    
                    System.out.println("Enter Employee salary: ");
                    e1.setSalary(sc.nextFloat());
                    
                    sc.nextLine();
                    
                    System.out.println("Enter Employee joining date");
                    e1.setJoiningDate(sc.nextLine());

                    dao.insert(e1);
                    System.out.println("Employee Inserted Successfully");
                    break;

                case 2:
                    System.out.print("Enter Employee Id: ");
                    int id = sc.nextInt();

                    Employee employee = dao.findById(id);

                    if (employee != null) {
                        System.out.println(employee);
                    } else {
                        System.out.println("Employee Not Found");
                    }
                    break;

                case 3:
                    List<Employee> employees = dao.findAll();

                    for (Employee e : employees) {
                        System.out.println(e);
                    }
                    break;

                case 4:
                	Employee e2 = new Employee();

                    System.out.print("Enter Employee Id: ");
                    e2.setEmployeeid(sc.nextInt());

                    sc.nextLine();

                    System.out.print("Enter New Employee Name: ");
                    e2.setEmployeeName(sc.nextLine());

                    System.out.print("Enter Employee Department: ");
                    e2.setDepartment(sc.nextLine());
                    
                    System.out.println("Enter Employee salary");
                    e2.setSalary(sc.nextFloat());
                    
                    System.out.println("Enter Employee joining date");
                    e2.setJoiningDate(sc.nextLine());

                    dao.update(e2);
                    System.out.println("Employee Updated Successfully");
                    break;

                case 5:
                    System.out.print("Enter Employee Id: ");
                    int deleteId = sc.nextInt();

                    dao.delete(deleteId);
                    System.out.println("Employee Deleted Successfully");
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

 
