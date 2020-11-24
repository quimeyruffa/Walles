import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import SinImagen from './ballenita3.png';

export default class MisCompras extends Component {

    constructor() {
        super();
        this.state = {
            productos:[]
        }
        }
    

    baseUrl = "http://whales.matanga.net.ar:8000/usuarios/mostrarCompras";
    componentDidMount () {


        var token = localStorage.getItem('token')
        console.log(token)
        fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        }).then(res =>
            res.json().then((result) => {
                console.log(result)

               let productArray =  result.data.map(elem => {
                    let producto = {

                        Producto: elem.Producto,
                        DescProduct: elem.DescProduct,
                        imagenProducto: elem.imagenProducto,
                        importe: elem.importe,
                        NombreVendedor: elem.NombreVendedor,
                        ApellidoVendedor: elem.ApellidoVendedor

                    }
                    return producto;

                })
                this.setState({
                    productos: productArray
                })
            }
            ))
    }


    render() {
        return (
            
            <div className='row'>
                
                {this.state.productos && this.state.productos.map(producto => (

                    <div className="col">
                        <Card style={{ width: '18rem', margin: '2rem' }}>
                            <Card.Img variant="top" src={producto.imagenProducto ? SinImagen : "http://whales.matanga.net.ar:8000/" + producto.imagenProducto} />
                            <Card.Body>
                                <Card.Title  >{producto.Producto}</Card.Title>
                                <Card.Text>
                                    Descripción: {producto.DescProduct} <br />
                                        Vendedor: {producto.NombreVendedor}  {producto.ApellidoVendedor}<br />
                                        Precio: ${producto.importe}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>


                ))}

            </div>



        )
    }
}

