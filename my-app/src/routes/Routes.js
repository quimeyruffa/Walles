import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../component/Footer';
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import '../css/Routes.css';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="grid-container">
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
        <Footer/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
