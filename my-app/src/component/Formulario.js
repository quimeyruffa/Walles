import React, { Component } from 'react'


export default class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleClick = (e) => {
        const { iniciarSesion } = this.props;
        iniciarSesion(this.state.form)
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
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
                        <button className="btn btn-primary" onClick={this.handleClick}> Iniciar Sesion </button>

                    </div>
                </div>
            </div>
        )
    }
}
