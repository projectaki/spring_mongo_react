import React, { Component } from 'react';
import api from '../../services/todoService';
import "./CreateTodo.css";

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            color: "black",
            currentDivId: "blue",
            toggle: false,
        };
    }

    componentDidMount() {
       this.reloadDefaultText();
    }

    reloadDefaultText() {
        const p1 = document.getElementById("create-p1");
        const p2 = document.getElementById("create-p2");
        p1.textContent = "Edit me to give a name for your todo note!";
        p2.textContent = "Edit me to write a description for your todo note!";
        this.setState({name: "Edit me to give a name for your todo note!", description: "Edit me to write a description for your todo note!" });
    }

    setParagraphState() {
        const p1 = document.getElementById("create-p1");
        const p2 = document.getElementById("create-p2");
        this.setState({name: p1.textContent, description: p2.textContent });
    }
    

    async submit() {
        await this.setParagraphState();
        if (this.state.name.length > 50 || this.state.name.length === 0 || this.state.description.length === 0) {
            alert("Must be between 0 and 50 characters")
        }   
        else {
            
            this.createTodo();
            this.closeModal();
            this.reloadDefaultText();
            console.log(this.state.name);
        }
        
    }

    async onChangeColor(id) {
        console.log()
        const newDiv = document.getElementById(id);
        const lastDiv = document.getElementById(this.state.currentDivId);
        lastDiv.style.boxShadow = "0 0 0 0 white";
        newDiv.style.boxShadow = "0 0 1vmin 1vmin white";
        this.setState({ color: newDiv.style.backgroundColor, currentDivId: id });
        this.toggleColors();
    }

    toggleColors() {
        this.setState({toggle: !this.state.toggle});
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
                    <div onClick={() => this.toggleColors()} style={{backgroundColor: this.state.color}} className="color-square"></div>
                    {this.state.toggle && (
                        <div className="color-picker-cont">
                        <div id="blue" onClick={() => this.onChangeColor("blue")} style={{backgroundColor: "blue"}} className="color-block"></div>
                        <div id="red" onClick={() => this.onChangeColor("red")} style={{backgroundColor: "red"}} className="color-block"></div>
                        <div id="green" onClick={() => this.onChangeColor("green")} style={{backgroundColor: "green"}} className="color-block"></div>
                        <div id="yellow" onClick={() => this.onChangeColor("yellow")} style={{backgroundColor: "yellow"}} className="color-block"></div>
                        <div id="black" onClick={() => this.onChangeColor("black")} style={{backgroundColor: "black"}} className="color-block"></div>
                    </div>
                    )}
                    

                    <h1>Name:</h1>
                    <p id="create-p1" contenteditable="true">Edit me to give a name for your todo note!</p>
                    <h1>Description:</h1>
                    <p id="create-p2" contenteditable="true">Edit me to write a description for your todo note!</p>
                    
                    
                    <button onClick={() => this.submit()} className="submit-btn"><i className="far fa-check-circle fa-1x confirm-icon"></i></button>
                
            </div>
        );
    }
}

export default CreateTodo;