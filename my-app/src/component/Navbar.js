import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super();
        this.state={
            showStore:true,
            showUser:false 
        }
    }
    componentWillMount() {
        const token = localStorage.getItem('token')
        if (token) {
            this.setState({
                showStore:false,
                showUser: true
            })
        }
    }
    cerrarSesion() {
        localStorage.removeItem('token')
        window.location.href = './'
    }
    render() {
        return (
            <React.Fragment>
                <div className="row fixed-top ">
                    <div className="col-12" >
                        <footer className="footer" >
                            WHALES
                        <div className="link">
                                <Link to="/" style={{color: 'white', 'margin-right': '1rem'}}> Home </Link>

                                <Link style={{ display: this.state.showStore ? 'show' : 'none', color: 'white', 'margin-right': '1rem' }} to="/login"  > 
                                Iniciar Sesion 
                                </Link>
                                
                                <Link to="/singin" style={{ display: this.state.showStore ? 'show' : 'none', color: 'white' }}> 
                                Registrate
                                 </Link>

                                <Link to="/profile" style={{ display: this.state.showUser ? 'show' : 'none', 'margin-right': '1rem', color: 'white' }}>
                                    Perfil 
                                </Link>

                                <Link to="/" onClick={this.cerrarSesion} style={{ display: this.state.showUser ? 'show' : 'none', color: 'white' }}> 
                                Cerrar Sesion
                                 </Link>
                            </div>
                        </footer>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Navbar;