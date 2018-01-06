package entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Todo {

	
//FIELDS
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	   
	   @ManyToOne
	   @JoinColumn(name = "user_id")
	   private User user;
	   
	   private String task;
	   private String description;
	   private int completed;
	   
	   @Column(name="user_id")
	   private int userId;
	   @Column(name="due_date")
	   private String dueDate;
	   @Column(name="complete_date")
	   private String completeDate;
	   @Column(name="created_at")
	   private Date createdAt;
	   @Column(name="updated_at")
	   private Date updatedAt;
	   
	   
	   
//GETTERS AND SETTERS
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCompleted() {
		return completed;
	}
	public void setCompleted(int completed) {
		this.completed = completed;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getCompleteDate() {
		return completeDate;
	}
	public void setCompleteDate(String completeDate) {
		this.completeDate = completeDate;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	

//TOSTRING
	@Override
	public String toString() {
		return "Todo [id=" + id + ", task=" + task + ", description=" + description + ", completed=" + completed
				+ ", userId=" + userId + ", dueDate=" + dueDate + ", completeDate=" + completeDate + ", createdAt="
				+ createdAt + ", updatedAt=" + updatedAt + "]";
	}
	   
	   
	
	   
	   
	   
}
