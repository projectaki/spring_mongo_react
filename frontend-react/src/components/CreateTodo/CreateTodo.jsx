import React, { Component } from 'react';
import api from '../../services/todoService';
import "./CreateTodo.css";

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            color: "#F8D512",
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.name.length > 30) {
            alert("Maximum character for name is 30!")
        }
        else {
            
            this.createTodo();
            this.closeModal();
        }
        
    }

    myChangeHandler = (evt) => {
        
        this.setState({ [evt.target.name]: evt.target.value });
    }

    onChangeColor = (evt) => {
        
        this.setState({ color: evt.target.value });
    }

    

    closeModal() {
        const elem = document.getElementById("modal-create");
        var instance = window.M.Modal.getInstance(elem);
        instance.close();
        
    }


    async createTodo() {
        const user = this.props.user;
        const defaultJson = {userId: user.sub, todoName: this.state.name, description: this.state.description, color: this.state.color};
        await api.create(defaultJson);
    }
    
    render() {

        return (
            <div id="modal-create" className="modal modal-create">
                <form onSubmit={this.mySubmitHandler} className="form">
                        
                        <label style={{backgroundColor: this.state.color}}>
                            <input type="color"
                                value={this.state.color}
                                onChange={this.onChangeColor}
                                
                                />
                                <p style={{margin: 0, position: "absolute", top: "1.2vmin", right: "1vmin", fontSize: "1.3vmin", color: "black"}}>color</p>
                        </label>
                    
                    <div className="name-input-cont">
                    <p style={{margin: 0}}>Todo Name:</p>
                        <input
                            type='text'
                            name='name'
                            onChange={this.myChangeHandler}
                            defaultValue=""
                            required
                            autoComplete="off"
                            className="input-text"
                        />
                    </div>
                    <div className="desc-input-cont">
                    <p style={{margin: 0}}>Description:</p>
                        <input
                            type='text'
                            name='description'
                            onChange={this.myChangeHandler}
                            defaultValue=""
                            required
                            autoComplete="off"
                        />
                    </div>
                    
                    <button className="submit-btn"
                        type='submit'
                    ><i className="far fa-check-circle fa-1x confirm-icon"></i></button>
                </form>
            </div>
        );
    }
}

export default CreateTodo;