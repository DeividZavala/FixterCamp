import React, { Component } from 'react';
import logo from './logo.svg';
import Lista from './components/lista/Lista';
import './App.css';

class App extends Component {
  constructor(){
        super();
        this.state = {
            name: "David"
        }
    }

  render() {

    let func = () => {
      console.log("hola");
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Lista name={this.state.name} func={this.func}/>
        </p>
      </div>
    );
  }
}

export default App;
