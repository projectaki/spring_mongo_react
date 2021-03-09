package com.akos.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.akos.todo.model.Todo;
import com.akos.todo.service.TodoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/todo")
public class RestApi {

    @Autowired
    TodoService todoService;

    @GetMapping("/getAllTodos")
    public List<Todo> getAllTodos() {

        return todoService.retrieveAllTodos();
    }

    @GetMapping(value = "/getTodoById/{todoId}")
    public Optional<Todo> getTodoById(@PathVariable String todoId) {
        return todoService.findTodoById(todoId);
    }

    @GetMapping("/userId")
    public List<Todo> getAllByUserId(@RequestParam(name = "userid") String userId) {
        return todoService.getAllByUserId(userId);
    }

    @GetMapping("/todoName")
    public List<Todo> getAllByName(@RequestParam(name = "todoname") String todoName) {
        return todoService.getAllByName(todoName);
    }

    @PostMapping(value = "/createTodo")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.addTodo(todo);
    }

    @PutMapping(value = "/updateTodo/{todoId}")
    public Todo updateTodo(@PathVariable String todoId, @RequestBody Todo todo) {
        return todoService.updateTodo(todo, todoId);
    }

    @DeleteMapping(value = "/deleteTodo/{todoId}")
    public void deleteTodo(@PathVariable String todoId) {

        todoService.deleteById(todoId);
    }

}
