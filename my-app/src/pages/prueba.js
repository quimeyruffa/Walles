import React from 'react'
import { useState } from 'react';
import SinImagen from './ballenita3.png';
import { Link } from 'react-router-dom';
// import PruebaImage from '../component/PruebaImage';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Prueba() {

    const [products, setProduct] = useState([]);
    const productos = async () => {

        const url = 'http://whales.matanga.net.ar:8000/productos/'
        const res = await fetch(url)
        const data = await res.json();
        setProduct(data);
    }
    return (
        <React.Fragment>
            
            <button onClick={productos}> Click me!</button>
            <Link to="/profile" className="link"> Profile </Link>
            <div className='row'>
        
                {products.map(producto => (

                    <div className="col">
                        <Card style={{ width: '18rem' , margin:'2rem'}}>
                        <Card.Img variant="top" src={ ! producto.imagen ? SinImagen : "http://whales.matanga.net.ar:8000/" + producto.imagen}/>
                            <Card.Body>
                                <Card.Title  >{producto.nombre}</Card.Title>
                                <Card.Text>
                                    Descripción: {producto.id}
                                    Categoria:{producto.categoria}
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                                
                            </Card.Body>
                        </Card>
                    </div>


                ))}

            </div>

        </React.Fragment>
    )




}
export default Prueba;