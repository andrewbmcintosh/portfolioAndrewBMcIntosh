import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Main env={this.props.env} />
      </React.Fragment>
    );
  }
}

export default App;
