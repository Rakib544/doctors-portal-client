import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';

const App = () => {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;