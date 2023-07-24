package com.iamneo.security.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "reviews_and_ratings")
public class Review {
	@Id
	@GeneratedValue
	private int reviews_and_ratings_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private Userdetails user_id;
	@Column(name = "reviews")
	private String reviews;
	@Column(name = "ratings")
	private float ratings;
	public int getReviews_and_ratings_id() {
		return reviews_and_ratings_id;
	}
	public void setReviews_and_ratings_id(int reviews_and_ratings_id) {
		this.reviews_and_ratings_id = reviews_and_ratings_id;
	}
	public Userdetails getUser_id() {
		return user_id;
	}
	public void setUser_id(Userdetails user_id) {
		this.user_id = user_id;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public float getRatings() {
		return ratings;
	}
	public void setRatings(float ratings) {
		this.ratings = ratings;
	}
	public Review(int reviews_and_ratings_id, Userdetails user_id, String reviews,
			float ratings) {
		super();
		this.reviews_and_ratings_id = reviews_and_ratings_id;
		this.user_id = user_id;
		this.reviews = reviews;
		this.ratings = ratings;
	}
	public Review() {
		super();
	}
}
