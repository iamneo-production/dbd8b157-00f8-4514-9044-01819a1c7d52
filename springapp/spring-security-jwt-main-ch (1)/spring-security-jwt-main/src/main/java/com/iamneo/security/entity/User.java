package com.iamneo.security.entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_Chef")
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private Long chef_id;
    private String username;
    private String email;
    private String password;
    private Long phone;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private List<Payment> payment_chef_id;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private List<Review> reviews_and_ratings_chef_id;
    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
    public List<Payment> getPayment_chef_id() {
		return payment_chef_id;
	}
	public void setPayment_chef_id(List<Payment> payment_chef_id) {
		this.payment_chef_id = payment_chef_id;
	}	
	public List<Review> getReviews_and_ratings_chef_id() {
		return reviews_and_ratings_chef_id;
	}
	public void setReviews_and_ratings_chef_id(List<Review> reviews_and_ratings_chef_id) {
		this.reviews_and_ratings_chef_id = reviews_and_ratings_chef_id;
	}
}
