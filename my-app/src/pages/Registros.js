import React, { useState } from 'react'
import FormData from 'form-data';
import Axios from 'axios';
import '../css/Login.css';
const baseUrl = "http://whales.matanga.net.ar:8000/usuarios";
function Registros() {
    const [nombre, setName]=useState()
    const [imagen, setFile] = useState();
    const [pass, setPass] = useState();
    const [apellido, setApellido] = useState();
    const [email, setEmail] = useState();
    const [id_estado, setEstado] = useState();
    const [id_provincia, setProvincia] = useState();
    const [telefono, setTel] = useState();
    const [dni, setDni] = useState();
    const [direccion, setDireccion] = useState();
    const [ciudad, setCiudad] = useState();
    const send = event => {
        const data = new FormData();
        data.append("nombre", nombre)
        data.append("imagen", imagen);
        data.append("pass", pass);
        data.append("apellido", apellido);
        data.append("email", email);
        data.append("id_estado", id_estado);
        data.append("id_provincia", id_provincia);
        data.append("telefono", telefono);
        data.append("dni", dni);
        data.append("direccion", direccion);
        data.append("ciudad", ciudad);

        Axios
            .post(baseUrl, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
        <div  style={{textAlign:"center"}} className=" col-4 containerPrincipal offset-4">
            <header >
                <form className="form-group" action="/profile" method="post" enctype="multipart/form-data">
                    <div>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            name='recfile'
                            id="apellido"
                            onChange={(event => {
                                const { value } = event.target;
                                setApellido(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="file">File</label>
                        <input
                            type="file"
                            name='recfile'
                            id="imagen"
                            accept=".jpg"
                            onChange={event => {
                                const imagen = event.target.files[0];
                                setFile(imagen);
                            }} />
                    </div>
                    <div>
                        <label htmlFor="ciudad">Ciudad</label>
                        <input
                            type="text"
                            name='recfile'
                            id="ciudad"
                            onChange={(event => {
                                const { value } = event.target;
                                setCiudad(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="direccion">Direccion</label>
                        <input
                            type="text"
                            name='recfile'
                            id="direccion"
                            onChange={(event => {
                                const { value } = event.target;
                                setDireccion(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="text"
                            name='recfile'
                            id="dni"
                            onChange={(event => {
                                const { value } = event.target;
                                setDni(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            type="text"
                            name='recfile'
                            id="email"
                            onChange={(event => {
                                const { value } = event.target;
                                setEmail(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="id_estado">Estado</label>
                        <input
                            type="number"
                            name='recfile'
                            id="estado"
                            onChange={(event => {
                                const { value } = event.target;
                                setEstado(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="id_provincia">Provincia</label>
                        <input
                            type="number"
                            name='recfile'
                            id="provincia"
                            onChange={(event => {
                                const { value } = event.target;
                                setProvincia(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name='recfile'
                            id="nombre"
                            onChange={(event => {
                                const { value } = event.target;
                                setName(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            name='recfile'
                            id="password"
                            onChange={(event => {
                                const { value } = event.target;
                                setPass(value);
                            })} />
                    </div>
                    <div>
                        <label htmlFor="apellido">Telefono</label>
                        <input
                            type="text"
                            name='recfile'
                            id="telefono"
                            onChange={(event => {
                                const { value } = event.target;
                                setTel(value);
                            })} />
                    </div>
                </form>
                <button onClick={send}>Send</button>
            </header>
        </div>
        </>
    )

}

export default Registros;