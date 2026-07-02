package com.example.employeedemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Employee {
	@Id
	private int employeeid;
	private String employeeName;
	private String department;
	private  float salary;
	private String joiningDate;
	
	public Employee() {}
	public Employee(String employeeName,String department,float salary,String joiningDate) {
		this.employeeName=employeeName;
		this.department=department;
		this.salary=salary;
		this.joiningDate=joiningDate;
	}
	
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	
	public void setDepartment(String department) {
		this.department = department;
	}
	
	public void setSalary(float salary) {
		this.salary = salary;
	}
	
	public void setJoiningDate(String joiningDate) {
		this.joiningDate = joiningDate;
	}
	
	public int getEmployeeid() {
		return employeeid;
	}
	
	public String getEmployeeName() {
		return employeeName;
	}
	
	public String getDepartment() {
		return department;
	}
	
	public float getSalary() {
		return salary;
	}
	
	public String getJoiningDate() {
		return joiningDate;
	}
	
	
	 @Override
	    public String toString() {
	        return "Employee [employeeid=" + employeeid +
	               ", employeeName=" + employeeName +
	               ", department=" + department +
	               ", salary=" + salary +
	               ", joiningDate=" + joiningDate + "]";
	    }

}
