import http from "../http-common";

class TodoService {
  getAll() {
    return http.get("/getAllTodos");
  }

  get(id) {
    return http.get(`/getTodoById/${id}`);
  }

  create(data) {
    return http.post("/createTodo", data);
  }

  update(id, data) {
    return http.put(`/updateTodo/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteTodo/${id}`);
  }

  findByUser(userid) {
    return http.get(`/userId?userid=${userid}`);
  }
}

export default new TodoService();