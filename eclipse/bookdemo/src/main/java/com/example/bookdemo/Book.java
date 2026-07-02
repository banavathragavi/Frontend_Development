package com.example.bookdemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Book {
	@Id
	private int bookid;
	private String title;
	private String author;
	private String category;
	private int price;
	
	public Book() {}
	
	public Book(String title,String author,String category,int price) {
		this.title=title;
		this.author=author;
		this.category=category;
		this.price=price;
	}
	
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
	
	public int getBookid() {
		return bookid;
	}
	
	public String getTitle() {
		return title;
	}
	
	public String getAuthor() {
		return author;
	}
	
	public String getCategory() {
		return category;
	}
	
	public int getPrice() {
		return price;
	}  
}


