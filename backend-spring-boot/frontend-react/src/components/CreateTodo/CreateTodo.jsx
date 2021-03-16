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
            currentDivId: "black",
            toggle: false,
        };
    }

    componentDidMount() {
       this.reloadDefaultText();
    }

    clearParagraph(id) {
        const p1 = document.getElementById(id);
        p1.textContent = "";
    }

    reloadDefaultText() {
        const p1 = document.getElementById("create-p1");
        const p2 = document.getElementById("create-p2");
        p1.textContent = "Edit me to give a name for your to-do note!";
        p2.textContent = "Edit me to write a description for your to-do note!";
        this.setState({name: "Edit me to give a name for your to-do note!", description: "Edit me to write a description for your to-do note!" });
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

    async onChangeColor(id,e) {
        console.log()
        const newDiv = document.getElementById(id);
        const lastDiv = document.getElementById(this.state.currentDivId);
        lastDiv.style.boxShadow = "0 0 0 0 white";
        newDiv.style.boxShadow = "0 0 1vmin 1vmin white";
        this.setState({ color: newDiv.style.backgroundColor, currentDivId: id });
        this.toggleColors(e);
    }

    toggleColors(e) {
        e.stopPropagation();
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
            <div id="modal-create" className="modal modal-create" onClick={() => this.setState({toggle: false})}>
                    <div onClick={(e) => this.toggleColors(e)} style={{backgroundColor: this.state.color}} className="color-square"></div>
                    {this.state.toggle && (
                        <div className="color-picker-cont">
                        <div id="#1399DC" onClick={(e) => this.onChangeColor("#1399DC",e)} style={{backgroundColor: "#1399DC"}} className="color-block"></div>
                        <div id="#F98BE2" onClick={(e) => this.onChangeColor("#F98BE2",e)} style={{backgroundColor: "#F98BE2"}} className="color-block"></div>
                        <div id="#50DC13" onClick={(e) => this.onChangeColor("#50DC13",e)} style={{backgroundColor: "#50DC13"}} className="color-block"></div>
                        <div id="#F8D912" onClick={(e) => this.onChangeColor("#F8D912",e)} style={{backgroundColor: "#F8D912"}} className="color-block"></div>
                        <div id="black" onClick={(e) => this.onChangeColor("black",e)} style={{backgroundColor: "black"}} className="color-block"></div>
                    </div>
                    )}
                    

                    <h1 className="modal-title" style={{paddingTop: "5vh"}}>Name:</h1>
                    <p onClick={() => this.clearParagraph("create-p1")} id="create-p1" contenteditable="true">Edit me to give a name for your to-do note!</p>
                    <h1 className="modal-title">Description:</h1>
                    <p onClick={() => this.clearParagraph("create-p2")} id="create-p2" contenteditable="true">Edit me to write a description for your to-do note!</p>
                    
                    
                    <button onClick={() => this.submit()} className="submit-btn"><i className="far fa-check-circle fa-1x confirm-icon"></i></button>
                
            </div>
        );
    }
}

export default CreateTodo;