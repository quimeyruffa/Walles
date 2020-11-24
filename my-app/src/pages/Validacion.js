import React, { Component } from 'react'
import Formulario from '../component/Formulario'

export default class Validacion extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            codigo:''
        }
    }
    baseUrl  = 'http://whales.matanga.net.ar:8000/usuarios/validacion/'
    validacion = async (form) => {
        var data = { email: form.email, password: form.password, codigo: form.codigo };
        await fetch(this.baseUrl, {
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
            }));
        window.location.href = '/login'
    };
    render() {
        return (
            <div>
                <Formulario registro={true} validacion={this.validacion}/>
            </div>
        )
    }
}
