import React, { Component } from 'react';
import  '../css/Login.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';


const baseUrl ="http://localhost:3001/usuarios";
const cookies = new Cookies();
class Login extends Component {
    state={
        form:{
            username:'',
            password:''
        }
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

    iniciarSesion= async ()=>{
        // /*SIMULA -> SELECT * FROM USUARIOS WHERE ussername= **** and password = **** */
        await axios.get(baseUrl,{params:{username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response =>{
            return (response.data);
        })
        .then(response =>{
            if(response.length > 0  ){
                var respuesta = response[0];
                cookies.set('id', respuesta.id, {path:'/'});
                cookies.set('apellido', respuesta.apellido, {path:'/'});
                cookies.set('nombre', respuesta.nombre, {path:'/'});
                cookies.set('username', respuesta.username,{path:"/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                window.location.href="./menu"
            }else{
                alert('El usuario o la contraseña son incorrectos')
            }
        })
        .catch(error =>{
            console.log(error);
        })
    
    }

    componentDidMount(){
        if(cookies.get("username")){
            window.location.href="./menu";
        }
    }

    render() {
        return (
            <div className="container-fluid row">
            <div className="containerPrincipal offset-4 col-4">
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
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}> Iniciar Sesion </button>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login;