package com.example.studentdemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Student {
	@Id
	private int std_id;
	private String stdName;
	private String email;
	private String course;
	private int age;
	
	public Student() {}
	
	public Student(String stdName,String email,String course,int age) {
		this.stdName=stdName;
		this.email=email;
		this.course=course;
		this.age=age;
	}
	
	public int getStd_id() {
		return std_id;
	}
	
	public String getStdName() {
		return stdName;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getCourse() {
		return course;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setStd_id(int std_id) {
		this.std_id = std_id;
	}
	
	public void setStdName(String stdName) {
		this.stdName = stdName;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setCourse(String course) {
		this.course = course;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
}


