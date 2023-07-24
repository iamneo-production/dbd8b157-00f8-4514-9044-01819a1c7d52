package com.iamneo.security.entity;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "bookings")
public class Booking {
	@Id
	@Column(name = "booking_id")
	private int booking_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private Chefdet chef_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private Userdetails user_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	private Order order_id;
	@Column(name = "order_date")
	private Date order_date;
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public Chefdet getChef_id() {
		return chef_id;
	}
	public void setChef_id(Chefdet chef_id) {
		this.chef_id = chef_id;
	}
	public Userdetails getUser_id() {
		return user_id;
	}
	public void setUser_id(Userdetails user_id) {
		this.user_id = user_id;
	}
	public Order getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Order order_id) {
		this.order_id = order_id;
	}
	public Date getOrder_date() {
		return order_date;
	}
	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}
	public Booking(int booking_id, Chefdet chef_id, Userdetails user_id, Order order_id, Date order_date) {
		super();
		this.booking_id = booking_id;
		this.chef_id = chef_id;
		this.user_id = user_id;
		this.order_id = order_id;
		this.order_date = order_date;
	}
	public Booking() {
		super();
	}
}
