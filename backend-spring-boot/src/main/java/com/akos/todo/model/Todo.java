package com.akos.todo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todos")
public class Todo {

    @Id
    private String id;
    private String userid;
    private String todoName;
    private String description;
    private String color;

    public Todo() {

    }

    public Todo(String userid, String todoName, String description, String color) {
        this.todoName = todoName;
        this.description = description;
        this.userid = userid;
        this.color = color;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userid;
    }
    public void setUserId(String userid) {
        this.userid = userid;
    }

    public String getTodoName() {
        return todoName;
    }
    public void setTodoName(String todoName) {
        this.todoName = todoName;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "todo [id=" + id + ", userid=" + userid + ", todoName=" + todoName +  ", description=" + description + ", color=" + color +
                "]";
    }
}
