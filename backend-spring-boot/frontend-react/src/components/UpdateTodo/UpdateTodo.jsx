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

    async componentDidUpdate(oldProps) {
        
        const newProps = this.props
        if(oldProps.todoid !== newProps.todoid ) {
            const p1 = document.getElementById("update-p1");
            const p2 = document.getElementById("update-p2");
            await this.setState({name: this.props.todoname, description: this.props.tododescription});
            p1.textContent = this.state.name;
            p2.textContent = this.state.description;
        }
        
    }

    clearParagraph(id) {
        const p1 = document.getElementById(id);
        p1.textContent = "";
    }

    setParagraphState() {
        const p1 = document.getElementById("update-p1");
        const p2 = document.getElementById("update-p2");
        this.setState({name: p1.textContent, description: p2.textContent });
        
    }
    

    async submit() {
        await this.setParagraphState();
        if (this.state.name.length > 50 || this.state.name.length === 0 || this.state.description.length === 0) {
            alert("Must be between 0 and 50 characters")
        }   
        else {
            
            this.updateTodo();
            this.closeModal();
        }
        
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
               <h1 className="modal-title" style={{paddingTop: "5vh"}}>Name:</h1>
                    <p onClick={() => this.clearParagraph("update-p1")} id="update-p1" contenteditable="true">Edit me to give a name for your to-do note!</p>
                    <h1 className="modal-title">Description:</h1>
                    <p onClick={() => this.clearParagraph("update-p2")} id="update-p2" contenteditable="true">Edit me to write a description for your to-do note!</p>
                    
                    
                    <button onClick={() => this.submit()} className="submit-btn"><i className="far fa-check-circle fa-1x confirm-icon"></i></button>
            </div>
        );
    }
}

export default UpdateTodo;