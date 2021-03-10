import React, { Component } from 'react';
import api from '../../services/todoService';
import CreateTodo from '../CreateTodo/CreateTodo';
import Description from '../Description/Description';
import UpdateTodo from '../UpdateTodo/UpdateTodo';
import "./TodoList.css";
import pinIMG from "../../images/transpin.png";

class TodoList extends Component {

    state = {
        todos: [],
    }

    async componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems, {onCloseEnd: () => this.loadTodos()});
        await this.setState({user: this.props.user});
        this.loadTodos();
    }


    loadTodos() {
        const user = this.state.user;
        const encodedid = encodeURI(user.sub);
        api.findByUser(encodedid).then(res => {
            this.setState({todos: res.data});
        });
    }

    async deleteThisTodo(id, event) {
        event.stopPropagation();
        var conf = window.confirm("Are you sure");
        if (conf) {
            await api.delete(id);
            this.loadTodos();
        }
        
    }

    render() {
        const { todos } = this.state;
        return (
            <>
            
                <div className="board">
                    <div className="todo-container">
                        {todos.map(todo => <div key={todo.id} className="todo-item modal-trigger" style={{backgroundColor: `${todo.color}`}} data-target="desc-modal" onClick={() => this.setState({currentTodoId: todo.id,
                                                                                                                                            currentTodoName: todo.todoName,
                                                                                                                                            currentTodoDescription: todo.description})}>
                            <img src={pinIMG} style={{position: "absolute", height:"4vmin", top:0}}/>
                                                <div className="todo-item-name">
                                                    
                                                     {todo.todoName}
                                                    
                                                    
                                                </div>
                                                
                                                    
                                                <div className="todo-item-btn-cont">

                                                    <i data-target="modal-update" className="far fa-edit fa-1x modal-trigger" style={{color:"green"}} onClick={() => this.setState({currentTodoId: todo.id,
                                                                                                                                            currentTodoName: todo.todoName,
                                                                                                                                            currentTodoDescription: todo.description,
                                                                                                                                            currentTodoColor: todo.color
                                                                                                                                            })}></i>
                                                    <i className="far fa-window-close fa-1x" style={{color:"red"}} onClick={(e) => this.deleteThisTodo(todo.id,e)}></i>
                        
                                                </div>
                                                
                                            </div>)}
                    </div>
                </div>
                
                <CreateTodo user={this.props.user}/>
                <UpdateTodo user={this.props.user} 
                            todoid={this.state.currentTodoId}
                            todoname={this.state.currentTodoName}
                            tododescription={this.state.currentTodoDescription}
                            color={this.state.currentTodoColor}
                            />
                <Description description={this.state.currentTodoDescription}
                             name={this.state.currentTodoName}
                             todoid={this.state.currentTodoId}/>
            </>
            
        );
    }
}

export default TodoList;

