import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../component/Footer';
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import '../css/Routes.css';
import Profile from '../pages/Profile';
import Registros from '../pages/Registros';
import UserProducts from '../pages/UserProducts';
import prueba from '../pages/prueba';
import Navbar from '../component/Navbar';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        <div className="grid-container mt-5" >
        <Navbar/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route  path="/profile" component={Profile} />
        <Route exact path="/" component={prueba} />
        <Route path="/singin" component={Registros} />
        <Route path='/newProduct' component={UserProducts}/>
        <Footer/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
