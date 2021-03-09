package com.akos.todo.service;

import java.util.List;
import java.util.Optional;

import com.akos.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.akos.todo.model.Todo;

@Service
public class TodoService {

    @Autowired
    TodoRepository repo;

    public List<Todo> retrieveAllTodos(){
        return repo.findAll();
    }

    public Todo addTodo(Todo todo) {
        return repo.save(todo);
    }

    public Optional<Todo> findTodoById(String todoId) {
        return repo.findById(todoId);
    }

    public Todo updateTodo(Todo todo, String id) {
        todo.setId(id);
        return repo.save(todo);
    }

    public void deleteById(String todoId) {
        repo.deleteById(todoId);
    }

    public List<Todo> getAllByUserId(String userId) {
        return repo.findAllByUserid(userId);
    }

    public List<Todo> getAllByName(String todoName) {
        return repo.findAllByTodoName(todoName);
    }
}
