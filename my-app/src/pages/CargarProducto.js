import React, { useState, useEffect } from 'react'
import FormData from 'form-data';
import Axios from 'axios';
const CargarProducto = () => {
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [precio, setPrecio] = useState()
    const [descripcion, setDescripcion] = useState()
    const [id_usuario, setUsuario] = useState()
    const [cantidad, setCantidad] = useState()

    const baseUrl= 'http://whales.matanga.net.ar:8000/productos/'

   
    useEffect(() => {
        const id=  localStorage.getItem('id_usuario')
        setUsuario(id)
        console.log(id_usuario)
       
    }, [])
    const enviar = async () => {
        
        const data = new FormData();
        data.append("nombre", name);
        data.append("imagen",img);
        data.append("cantidad", cantidad);
        data.append("id_categoria", 3);
        data.append("id_marca", 2);
        data.append("precio", precio);
        data.append('descripcion', descripcion)
        data.append('id_usuario', id_usuario)

        await Axios
        .post(baseUrl, data)
        .then(res => {
            if(res.status===201){
                alert('Producto agregado correctamente')
                window.location.href = './profile'
            }
        })
        .catch(err => console.log(err))

    }
    return (
        <>
            <div style={{ textAlign: "center", 'margin-top': '5%', 'margin-bottom': '5%' }} className=" col-4 containerPrincipal offset-4">
                <header >
                    <form className="form-group" action="/profile" method="post" enctype="multipart/form-data">
                        <div>

                            <label>
                              <b> Cargar datos de producto: </b>
                            </label>
                            <br />

                            <label className="label" htmlFor="apellido">Nombre: </label>
                            <br></br>
                            <input
                                type="text"
                                name='recfile'
                                id="nombre"
                                onChange={(event => {
                                    const name = event.target.value;
                                    setName(name);
                                })} />
                        </div>
                        <br />
                        <div>
                            <label className="label" htmlFor="file">Imagen: </label>
                            <br></br>
                            <input
                                type="file"
                                name='recfile'
                                id="imagen"
                                accept=".jpg"
                                onChange={event => {
                                    const img = event.target.files[0];
                                    setImg(img);
                                }} />
                        </div>
                        <br />
                        <div>
                            <label className="label" htmlFor="ciudad">Precio: </label>
                            <br />
                            <input
                                type="text"
                                name='recfile'
                                id="precio"
                                onChange={(event => {
                                    const { value } = event.target;
                                    setPrecio(value);
                                })} />
                        </div>
                        <br />
                        <div>
                            <label className="label" htmlFor="direccion">Descripcion: </label>
                            <br />
                            <input
                                type="text"
                                name='recfile'
                                id="descripcion"
                                onChange={(event => {
                                    const { value } = event.target;
                                    setDescripcion(value);
                                })} />
                        </div>
                        <br />
                        <div>
                            <label className="label" htmlFor="email">Cantidad:</label>
                            <br />
                            <input
                                type="number"
                                name='recfile'
                                id="cantidad"
                                onChange={(event => {
                                    const { value } = event.target;
                                    setCantidad(value);
                                })} />
                        </div>
                    </form>
                    <button style={{ width: '40%' }} className='btn btn-secondary' onClick={enviar}>Send</button>
                </header>
            </div>
        </>
    )
}

export default CargarProducto;