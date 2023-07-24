package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "user_food")
public class Userfood {
	@Id
	@Column(name = "user_food_id")
	private int user_food_id;
	@Column(name = "user_food_name")
	private String user_food_name;
	public int getUser_food_id() {
		return user_food_id;
	}
	public void setUser_food_id(int user_food_id) {
		this.user_food_id = user_food_id;
	}
	public String getUser_food_name() {
		return user_food_name;
	}
	public void setUser_food_name(String user_food_name) {
		this.user_food_name = user_food_name;
	}
	public Userfood(int user_food_id, String user_food_name) {
		super();
		this.user_food_id = user_food_id;
		this.user_food_name = user_food_name;
	}
	public Userfood() {
		super();
	}
	
}
