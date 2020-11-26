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
        })
        
        window.location.href = '/login'
    };
    render() {
        return (
            <div>
                <Formulario validar={true} registro={false} validacion={this.validacion}/>
            </div>
        )
    }
}
