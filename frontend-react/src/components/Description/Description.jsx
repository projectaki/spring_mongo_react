import React, { Component } from 'react';
import "./Description.css";
class Description extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
        };
    }

    componentDidUpdate(oldProps) {
        
        const newProps = this.props
        if(oldProps.description !== newProps.description || oldProps.name !== newProps.name) {
          this.setState({name: this.props.name, description: this.props.description});
        }
        
      }

    render() {
        return (
            <div id="desc-modal" className="modal desc-modal" >
                <h1>
                    {this.state.name}
                </h1>
                <p>
                    {this.state.description}
                </p>
                
                
            </div>
        );
    }
}

export default Description;