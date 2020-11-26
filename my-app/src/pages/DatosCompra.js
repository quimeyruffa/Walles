import React, { Component } from 'react'


export default class DatosCompra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cantidad: '',
            token: this.token
        }

    }
    baseUrl = 'http://whales.matanga.net.ar:8000/productos/comprar'
    token = localStorage.getItem('token');
    realizarCompra = async () => {
        const { precio } = this.props
        let total = this.state.cantidad * precio;
        var data = { email: this.state.email, password: this.state.password, total: total };
        console.log('data', data)
        await fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'x-access-token': this.state.token
            }
        })

    }
    handleChange3 = (event) => {
        const { value } = event.target;
        this.setState({
            cantidad: parseInt(value, 10)
        })
    };
    handleChange2 = (event) => {
        const { value } = event.target;
        this.setState({
            password: { value }
        })
    };
    handleChange1 = (event) => {
        const { value } = event.target;
        this.setState({
            email: { value }
        })
    };
    render() {
        console.log(this.precio);
        return (
            <div>
                <div className=" col-6 form-group" style={{ padding: '3rem' }}>
                    <label> <b>Datos de la Compra </b></label>
                    <br />
                    <label>
                        Email:
                    </label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleChange1} />

                    <br />
                    <label> Contraseña: </label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange2}
                    />
                    <br />
                    <label> Cantidad: </label>
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        name="cantidad"
                        onChange={this.handleChange3}
                    />
                    <br />
                    <button onClick={this.realizarCompra} className='btn btn-primary' >Comprar</button>
                </div>
            </div>
        )
    }
}
