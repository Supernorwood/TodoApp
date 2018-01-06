package entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class User {
	
	
	//FIELDS
		   @Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private int id;
		   
		   @OneToMany(mappedBy="customer")
		   private List<Todo> todo;
		   
		   private String email;
		   private String password;
		   
		   

}
