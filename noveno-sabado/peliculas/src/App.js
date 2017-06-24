import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider, AppBar} from 'material-ui';
import Routes from './routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar 
          title="Mis pelis paaaaapuuuuuudddd"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          className="rojo"
          />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Routes />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
