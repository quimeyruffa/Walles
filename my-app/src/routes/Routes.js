import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../component/Footer';
import Login from '../pages/Login'
import '../css/Routes.css';
import Profile1 from '../pages/Profile1';
import DesItem from '../pages/DesItem';
import Registros from '../pages/Registros';
import UserProducts from '../pages/UserProducts';
import Navbar from '../component/Navbar';
import Menu from '../pages/Menu';
import Validacion from '../pages/Validacion';
import MisCompras from '../pages/MisCompras';
import CargarProducto from '../pages/CargarProducto';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        
        <div className="grid-container mt-5" >
        <Navbar/>
        <Route path='/misProductos' component={UserProducts} />
        <Route exact path="/login" component={Login} />
        <Route path="/miscompras" component={MisCompras}/>
        <Route path="/validate" component={Validacion}/>
        <Route  path="/profile" component={Profile1} />
        <Route path="/product" component={DesItem}/>
        <Route exact path="/" component={Menu} />
        <Route path="/singin" component={Registros} />
        <Route path='/newProduct' component={UserProducts}/>
        <Route path='/agregarProducto' component={CargarProducto}/>
        <Footer/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
