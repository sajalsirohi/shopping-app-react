import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
  return (
    <h1> Hats Page!!</h1>
  )
}

function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
