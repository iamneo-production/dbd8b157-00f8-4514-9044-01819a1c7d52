package com.iamneo.security.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "chef_menu")
public class Chefmenu {
	@Id
	@Column(name = "chef_menu_id")
	private int chef_menu_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private User chef_id;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_menu_id")
	private List<Cheffood> chef_menu_food_id;
	public int getChef_menu_id() {
		return chef_menu_id;
	}
	public void setChef_menu_id(int chef_menu_id) {
		this.chef_menu_id = chef_menu_id;
	}
	public User getChef_id() {
		return chef_id;
	}
	public void setChef_id(User chef_id) {
		this.chef_id = chef_id;
	}
	public List<Cheffood> getChef_menu_food_id() {
		return chef_menu_food_id;
	}
	public void setChef_menu_food_id(List<Cheffood> chef_menu_food_id) {
		this.chef_menu_food_id = chef_menu_food_id;
	}
	public Chefmenu(User chef_id,int chef_menu_id) {
		super();
		this.chef_id = chef_id;
	}
	public Chefmenu() {
		super();
	}
}

