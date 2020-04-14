import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import LoginPage from './pages/login/login.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
