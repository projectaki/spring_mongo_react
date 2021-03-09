package com.akos.todo.repository;

import com.akos.todo.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TodoRepository extends MongoRepository<Todo, String>{

    List<Todo> findAllByUserid(String userid);

    List<Todo> findAllByTodoName(String todoName);
}
