import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import BookSearch from './BookSearch';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class App extends Component {



  state = {
    books: [],
    showRemoveIcon: false,
    value: ""
  };
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BookSearch/>
    </div>
  );
    }
}

export default App;
