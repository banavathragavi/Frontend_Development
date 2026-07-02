package com.example.productdemo;


import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ProductDAO dao = new ProductDAO();

        while (true) {

            System.out.println("\n===== MENU =====");
            System.out.println("1. Insert Product");
            System.out.println("2. Find Product By ID");
            System.out.println("3. Find All Products");
            System.out.println("4. Update Product");
            System.out.println("5. Delete Product");
            System.out.println("6. Exit");

            System.out.print("Enter Choice: ");
            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    Product p1 = new Product();

                    System.out.print("Enter Product Id: ");
                    p1.setId(sc.nextInt());

                    sc.nextLine();

                    System.out.print("Enter Product Name: ");
                    p1.setName(sc.nextLine());

                    System.out.print("Enter Product Price: ");
                    p1.setPrice(sc.nextDouble());

                    dao.insert(p1);
                    System.out.println("Product Inserted Successfully");
                    break;

                case 2:
                    System.out.print("Enter Product Id: ");
                    int id = sc.nextInt();

                    Product product = dao.findById(id);

                    if (product != null) {
                        System.out.println(product);
                    } else {
                        System.out.println("Product Not Found");
                    }
                    break;

                case 3:
                    List<Product> products = dao.findAll();

                    for (Product p : products) {
                        System.out.println(p);
                    }
                    break;

                case 4:
                    Product p2 = new Product();

                    System.out.print("Enter Product Id: ");
                    p2.setId(sc.nextInt());

                    sc.nextLine();

                    System.out.print("Enter New Product Name: ");
                    p2.setName(sc.nextLine());

                    System.out.print("Enter New Product Price: ");
                    p2.setPrice(sc.nextDouble());

                    dao.update(p2);
                    System.out.println("Product Updated Successfully");
                    break;

                case 5:
                    System.out.print("Enter Product Id: ");
                    int deleteId = sc.nextInt();

                    dao.delete(deleteId);
                    System.out.println("Product Deleted Successfully");
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
