import React, { Component } from 'react';
import api from '../../services/todoService';
import "./UpdateTodo.css";

class UpdateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
        };

    } 

    componentDidUpdate(oldProps) {
        
        const newProps = this.props
        if(oldProps.todoid !== newProps.todoid ) {
          this.setState({name: this.props.todoname, description: this.props.tododescription})
        }
        
      }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.name.length > 30) {
            alert("Maximum character for name is 30!");
        }
        else {
            
            this.updateTodo();
            this.closeModal();
        }
        
    }

    myChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    closeModal() {
        const elem = document.getElementById("modal-update");
        var instance = window.M.Modal.getInstance(elem);
        instance.close();
    }

    async updateTodo() {
        const user = this.props.user;
        const todoid = this.props.todoid;
        const defaultJson = {userId: user.sub, todoName: this.state.name, description: this.state.description, color: this.props.color};
        await api.update(todoid, defaultJson);
    }

    render() {
        
        return (
            <div id="modal-update" className="modal modal-update">
                <form onSubmit={this.mySubmitHandler}>
                    <p className="name-input-cont" style={{margin: 0}}>Todo Name:</p>
                    <input
                        type='text'
                        name='name'
                        onChange={this.myChangeHandler}
                        value={this.state.name}
                        required
                        autoComplete="off"
                        
                        
                    />
                    <p style={{margin: 0}}>Description:</p>
                    <input
                        type='text'
                        name='description'
                        onChange={this.myChangeHandler}
                        value={this.state.description}
                        required
                        autoComplete="off"
                        
                    />
                    <button className="submit-btn"
                        type='submit'
                    ><i className="far fa-check-circle fa-1x confirm-icon"></i></button>
                </form>
            </div>
        );
    }
}

export default UpdateTodo;