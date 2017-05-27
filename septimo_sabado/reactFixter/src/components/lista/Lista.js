import React, {Component} from 'react';
import './lista.css';

class Lista extends React.Component{

    render(){
        return (
            <div className="bgRed" id="test" onClick={this.props.func} >Hola mi nombre es {this.props.name}</div>
        );
    }


}

export default Lista;