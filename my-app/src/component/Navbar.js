import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <React.Fragment>
            <div className="row fixed-top ">
                <div className="col-12" >
                    <footer className="footer" >
                        WHALES
                        <div className="link">
                        <Link to="/login"  style={{color:'white', 'margin-right':'1rem'}}> Iniciar Sesion </Link>
                        <Link to="/singin"  style={{color:'white'}}> Registrate </Link>
                       </div>
                    </footer>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Navbar;