import React from 'react';
import Home from './Screens/Home.screen';
import {Route,Switch}from 'react-router-dom';
import Profile from './Screens/Profile.screen';
function App() {
  return (
    <Switch>
      <Route  exact path="/">
      <Home/>
      </Route>
      <Route exact path="/profile/:valueId">
      <Profile/>
      </Route>
    </Switch>
  );
}

export default App;
