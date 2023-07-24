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
@Table(name = "user_menu")
public class Usermenu {
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private Userdetails user_id;
	@Id
	@Column(name = "user_menu_id")
	private int user_menu_id;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_menu_id")
	private List<Userfood> user_menu_food_id;
	public Userdetails getUser_id() {
		return user_id;
	}
	public void setUser_id(Userdetails user_id) {
		this.user_id = user_id;
	}
	public int getUser_menu_id() {
		return user_menu_id;
	}
	public void setUser_menu_id(int user_menu_id) {
		this.user_menu_id = user_menu_id;
	}
	public List<Userfood> getUser_menu_food_id() {
		return user_menu_food_id;
	}
	public void setUser_menu_food_id(List<Userfood> user_menu_food_id) {
		this.user_menu_food_id = user_menu_food_id;
	}
	public Usermenu(Userdetails user_id, int user_menu_id) {
		super();
		this.user_id = user_id;
		this.user_menu_id = user_menu_id;
	}
	public Usermenu() {
		super();
	}
	
}
