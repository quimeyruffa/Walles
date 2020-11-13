import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Formulario extends Component {

    state={
        form:{
            username:'',
            password:''
        }
    }
    handleClick =(e)=>{
        const { iniciarSesion} = this.props;
        iniciarSesion(this.state.form)
    }
    handleChange=async e=>{
       await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }
    
    render() {
        
        return (
            <div style={{height:'20%'}} className="containerPrincipal offset-4 col-4">

                <div className="containerSecundario ">
                    <div className="form-group">
                        <label>
                            Usuario:
            </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label> Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={this.handleClick}> Iniciar Sesion </button>
                        <Link to="/singin" className="link"> registrate </Link>
                    </div>
                </div>
            </div>
        )
    }
}
