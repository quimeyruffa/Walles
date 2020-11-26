import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import SinImagen from './ballenita3.png';
 const UserProducts=()=> {

    const [productos, setProductos] = useState()
     const baseUrl = "http://whales.matanga.net.ar:8000/usuarios/profile";

    useEffect(() => {
        var token = localStorage.getItem('token')
        console.log(token)
       fetch(baseUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        .then(res =>{
            res.json().then(async (result) => {
                console.log(result)
                const productos = result.data_productos
                let productArray =  await productos.map(elem => {
                    let producto = {
                        descripcionProducto: elem.descripcionProducto,
                        imagenProducto: elem.imagenProducto,
                        precio: elem.precio,
                        id_producto: elem.id_producto
                    }
                    return producto
                })
                setProductos(productArray)
            })})
            console.log(productos)
    })
    
        return (
            <React.Fragment>

             
                <div className='row'>
                    { productos && productos.map(producto => (

                        <div className="col" >
                            <Card style={{ width: '18rem', margin: '2rem' }}>
                                <Card.Img variant="top" src={!producto.imagenProducto ? SinImagen : "http://whales.matanga.net.ar:8000/" + producto.imagenProducto} />
                                <Card.Body>
                                    <Card.Title  >{producto.nombre}</Card.Title>
                                    <Card.Text>
                                       <b> {producto.descripcionProducto} </b> <br/>
                                   
                                        Precio: ${producto.precio}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>


                    ))}
                        
                </div>

            </React.Fragment>
        )
    

}
export default UserProducts;