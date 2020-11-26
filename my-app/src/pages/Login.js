import React, { Component } from 'react';
import '../css/Login.css';
// import Cookies from 'universal-cookie';
import Formulario from '../component/Formulario';

const baseUrl = "http://whales.matanga.net.ar:8000/usuarios/login";
// const cookies = new Cookies();
class Login extends Component {
    constructor(){
        super();
        this.state={
            token:null
        }
    }

    iniciarSesion = async (form) => {

        var data = { email: form.email, password: form.password };
        console.log('data', data)
       await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => 
            res.json().then((result)=>{
                console.warn("result", result);
                localStorage.setItem('token', result.token)
                this.setState({
                    token:result.token
                })
                this.Ingreso()
            }));
           
    }
    


    Ingreso(){
        if(this.state.token != null ){
            window.location.href = "./";
        }
        else{
            alert('El usuario es incorrecto')
        }
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