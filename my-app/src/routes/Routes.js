import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../component/Footer';
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import '../css/Routes.css';
import Profile from '../pages/Profile';
import Registros from '../pages/Registros';
import UserProducts from '../pages/UserProducts';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="grid-container">
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route  path="/profile" component={Profile} />
        <Route path="/singin" component={Registros} />
        <Route path='/newProduct' component={UserProducts}/>
        <Footer/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
