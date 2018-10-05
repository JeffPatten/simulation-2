import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import routes from './routes';



class App extends Component {
  
  render() {
    return (
      <div className="App">   
          {routes}
      </div>
    );
  }
}

export default App;
