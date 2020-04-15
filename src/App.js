import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import LoginPage from './pages/login/login.component';

import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
