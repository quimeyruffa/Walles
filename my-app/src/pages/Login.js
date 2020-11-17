import React, { Component } from 'react';
import '../css/Login.css';
// import Cookies from 'universal-cookie';
import Formulario from '../component/Formulario';

const baseUrl = "http://whales.matanga.net.ar:8000/usuarios/login";
// const cookies = new Cookies();
class Login extends Component {


    iniciarSesion = async (form) => {
        console.log('hola', form.email);

        var data = { email: form.email, password: form.password };
        
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'x-access-token': 'application/json'
            }
        }).then(res => 
            res.json().then((result)=>{
                console.warn("result", result);
                localStorage.setItem('login', JSON.stringify({
                    token: result.token
                }))
            }));
           
    }



        render() {
            return (
                <>
                    <Formulario iniciarSesion={this.iniciarSesion} />
                </>
            )
        }
    
}

export default Login;