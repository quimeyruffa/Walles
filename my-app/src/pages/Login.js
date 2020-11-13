import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Formulario from '../component/Formulario';
const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();
class Login extends Component {


    iniciarSesion = async (form) => {
        console.log(form.username);
        // /*SIMULA -> SELECT * FROM USUARIOS WHERE ussername= **** and password = **** */
        await axios.get(baseUrl, { params: { username: form.username, password: (form.password) } })
            .then(response => {
                console.log(response.data)
                return (response.data);
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: '/' });
                    cookies.set('apellido', respuesta.apellido, { path: '/' });
                    cookies.set('nombre', respuesta.nombre, { path: '/' });
                    cookies.set('username', respuesta.username, { path: "/" });
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                    window.location.href = "./menu"
                } else {
                    alert('El usuario o la contraseña son incorrectos')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }



    render() {
        return (
            <>
            <Formulario iniciarSesion={this.iniciarSesion}/>
            </>
        )
    }
}
export default Login;