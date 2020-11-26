import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import SinImagen from './ballenita3.png';
import DatosCompra from './DatosCompra';
export default class DesItem extends Component {
    constructor() {
        super();
        this.state = {
            id_producto: 0,
            products: [],
            id_usuario: null,
            user: []
        }
    }

    componentWillMount = async () => {
        let id = localStorage.getItem('id_producto')
        this.setState({
            id_producto: id
        })
        const url = 'http://whales.matanga.net.ar:8000/productos'
        const res = await fetch(url)
        const data = await res.json();
        let i;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.id_producto == id) {
                i = index
            }

        }

        this.setState({
            products: data[i]
        })
        
        this.getUsuario();

    }
    getUsuario = async () => {
        const id = this.state.products.IdUsuario

        const url = 'http://whales.matanga.net.ar:8000/usuarios'
        const res = await fetch(url)
        const data = await res.json();
        let i;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.id_usuario == id) {
                i = index
                this.setState({
                    id_usuario: element.id_usuario
                })
            }
        }

        this.setState({
            user: data[i]
        })
    }

    render() {
        return (
            <div>
                <div className='row'>


                    <div className="col-3" >
                        <Card style={{ width: '18rem', margin: '2rem' }}>
                            <Card.Img variant="top" src={!this.state.products.imagen ? SinImagen : "http://whales.matanga.net.ar:8000/" + this.state.products.imagen} />
                            <Card.Body>
                                <Card.Title  >{this.state.products.nombre}</Card.Title>
                                <Card.Text>
                                    Descripción: {this.state.products.descripcion} <br />

                                        Precio: ${this.state.products.precio}
                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-5 card user-description' style={{ height: '12%', 'margin-top': '1rem', 'text-aling': 'center', 'background-color': 'lightgray' }} >
                        <br></br>
                        <b>Email: </b> {this.state.user.email}
                        <hr></hr>
                        <b>Phone:</b> {this.state.user.telefono}
                        <hr></hr>
                        <b>Address:</b> {this.state.user.direccion}
                        <p></p>
                    </div>





                </div>
                <DatosCompra style={{ display: 'none' }} id_producto={this.state.id_producto} id_vendedor={this.state.id_usuario} precio={this.state.products.precio} />
            </div>
        )
    }
}
