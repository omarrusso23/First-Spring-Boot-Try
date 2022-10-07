package com.flights.model;
import java.util.Objects;
import javax.persistence.*;



// TABLAS PARA LA BASE DE DATOS



@Entity
@Table(name = "Usuarios")
public class Passenger {



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "id", nullable = false, length = 150)
	private int id;

	@Column(name = "firstName", nullable = false, length = 70)
	private String firstName;



	@Column(name= "password", nullable = false, length = 150)
	private String password;

	@Column(name= "email", nullable = false, length = 150)
	private String email;

	@Column(name= "image", nullable = false, length = 150)
	private String image;

	//Setters y Getters

	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}


	//CONSTRUCTOR PASSENGER Y MÉTODOS




	public Passenger() {

	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passenger other = (Passenger) obj;
		return Objects.equals(id, other.id);
	}





	@Override
	public String toString() {
		return "Passenger have this " + id + "this " + firstName;
	}





}