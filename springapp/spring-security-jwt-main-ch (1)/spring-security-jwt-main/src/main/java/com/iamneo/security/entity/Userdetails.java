package  com.iamneo.security.entity;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Transactional
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_details")
public class Userdetails {
	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private int user_id;
	@Column(name = "user_location")
	private String user_location;
	@Column(name = "user_date")
	private int user_date;
	@Column(name = "user_time")
	private int user_time;
	@Column(name = "user_size")
	private int user_size;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_location() {
		return user_location;
	}
	public void setUser_location(String user_location) {
		this.user_location = user_location;
	}
	public int getUser_date() {
		return user_date;
	}
	public void setUser_date(int user_date) {
		this.user_date = user_date;
	}
	public int getUser_time() {
		return user_time;
	}
	public void setUser_time(int user_time) {
		this.user_time = user_time;
	}
	public int getUser_size() {
		return user_size;
	}
	public void setUser_size(int user_size) {
		this.user_size = user_size;
	}
}
