import axios from "axios";

export default axios.create({
  baseURL: "https://spring-mongo-react.herokuapp.com/api/todo",
  headers: {
    "Content-type": "application/json"
  }
});