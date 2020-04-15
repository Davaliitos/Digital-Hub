import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import LoginPage from './pages/login/login.component';
import HomePage from './pages/home/home.component';

import Header from './components/header/header.component';
import {selectCurrentUser} from './redux/user/user.selectors'


const App = ({currentUser}) => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/login" render={() => currentUser ? (<Redirect to="/"/>) : (<LoginPage/>)}/>
        <Route exact path="/" render={() => !currentUser ? (<Redirect to="/login"/>) : (<HomePage/>)}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(App);
