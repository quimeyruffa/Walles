import React, { Component } from 'react'



export default class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                password: '',
                codigo:''
            },
            showResgistro:true,
            showButton:false,
            showCodigo:false
        }
    }
    componentWillMount(){
        const {registro, validar} = this.props;
        if (registro){
            this.setState({
                showResgistro:false,
                showButton:true
            })
        }
        if(validar){
            this.setState({
                showCodigo:true,
                showResgistro:false
            })
        }
    }

    handleClick2 = (e) => {
        const { validacion} = this.props;
        validacion(this.state.form)
    }

    handleClick = (e) => {
        const { iniciarSesion } = this.props;
        iniciarSesion(this.state.form)
    }
    handleChange = async e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    handleMove() {
        window.location.href = "./singin";
    }

    render() {

        return (
            <div style={{ height: '20%', 'margin-top': '10%' }} className="containerPrincipal offset-4 col-4">

                <div className="containerSecundario ">
                    <div className="form-group">

                        <label>
                            Email:
                        </label>
                        <br />
                        <input
                            type="email"
                            className="form-control"
                            name="email"
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
                        <label style={{ display: this.state.showCodigo ? 'show' : 'none'}}> Código: </label>
                        <br  />
                        <input
                            style={{ display: this.state.showCodigo ? 'show' : 'none'}}
                            type="codigo"
                            className="form-control"
                            name="codigo"
                            onChange={this.handleChange}
                        />
                        <br />

                    </div>
                    <button style={{ display: this.state.showCodigo ? 'show' : 'none', 'margin': '8px', width: '40%' }} className="btn btn-secondary" onClick={this.handleClick2}> Iniciar Sesion </button>
                    <button style={{ display: this.state.showResgistro ? 'show' : 'none', 'margin': '8px', width: '40%' }} className="btn btn-secondary" onClick={this.handleClick}> Iniciar Sesion </button>
                    <br />
                    <button style={{display: this.state.showButton ? 'show' : 'none', width: '40%' }} className="btn btn-secondary" onClick={this.handleMove}> Registrate </button>
                </div>

            </div>

        )
    }
}
