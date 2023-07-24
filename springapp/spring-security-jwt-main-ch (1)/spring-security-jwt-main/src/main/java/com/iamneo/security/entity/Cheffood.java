package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "chef_food")
public class Cheffood {
	@Id
	@GeneratedValue
	@Column(name = "chef_food_id")
	private int chef_food_id;
	@Column(name = "chefid")
	private int chefid;
	public int getChefid() {
		return chefid;
	}

	public void setChef_id(int chef_id) {
		this.chefid = chef_id;
	}

	@Column(name = "chef_food_no")
	private int chef_food_no;
	@Column(name = "chef_food_name")
	private String chef_food_name;
	@Column(name = "chef_food_price")
	private float chef_food_price;
	public int getChef_food_id() {
		return chef_food_id;
	}


	public int getChef_food_no() {
		return chef_food_no;
	}

	public void setChef_food_no(int chef_food_no) {
		this.chef_food_no = chef_food_no;
	}

	public void setChef_food_id(int chef_food_id) {
		this.chef_food_id = chef_food_id;
	}

	public String getChef_food_name() {
		return chef_food_name;
	}

	public void setChef_food_name(String chef_food_name) {
		this.chef_food_name = chef_food_name;
	}

	public float getChef_food_price() {
		return chef_food_price;
	}

	public void setChef_food_price(float chef_food_price) {
		this.chef_food_price = chef_food_price;
	}
	
	public Cheffood(int chef_food_id, int chefid, int chef_food_no, String chef_food_name, float chef_food_price) {
		super();
		this.chef_food_id = chef_food_id;
		this.chefid = chefid;
		this.chef_food_no = chef_food_no;
		this.chef_food_name = chef_food_name;
		this.chef_food_price = chef_food_price;
	}

	public Cheffood() {
		super();
	}
}
