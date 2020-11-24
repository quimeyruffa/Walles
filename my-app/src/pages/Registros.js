import React, { useState } from 'react'
import FormData from 'form-data';
import Axios from 'axios';
import '../css/Login.css';
const baseUrl = "http://whales.matanga.net.ar:8000/usuarios/registro";
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
    const send = async () => {
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

       await  Axios
            .post(baseUrl, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        turnValidate();
    }
    const turnValidate = ()=> {
        window.location.href = "./validate";
    }
    return (
        <>
        <div  style={{textAlign:"center", 'margin-top': '5%', 'margin-bottom': '5%'}} className=" col-4 containerPrincipal offset-4">
            <header >
                <form className="form-group" action="/profile" method="post" enctype="multipart/form-data">
                    <div>
                        <label  className="label" htmlFor="apellido">Apellido: </label>
                        <br></br>
                        <input
                            type="text"
                            name='recfile'
                            id="apellido"
                            onChange={(event => {
                                const { value } = event.target;
                                setApellido(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="file">File: </label>
                        <br></br>
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
                        <br/>
                    <div>
                        <label  className="label" htmlFor="ciudad">Ciudad: </label>
                            <br/>
                        <input
                            type="text"
                            name='recfile'
                            id="ciudad"
                            onChange={(event => {
                                const { value } = event.target;
                                setCiudad(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="direccion">Direccion: </label>
                        <br/>
                        <input
                            type="text"
                            name='recfile'
                            id="direccion"
                            onChange={(event => {
                                const { value } = event.target;
                                setDireccion(value);
                            })} />
                    </div>
                            <br/>
                    <div>
                        <label className="label" htmlFor="dni">DNI: </label>
                        <br/>
                        <input
                            type="text"
                            name='recfile'
                            id="dni"
                            onChange={(event => {
                                const { value } = event.target;
                                setDni(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="email">Email:</label>
                        <br/>
                        <input
                            type="text"
                            name='recfile'
                            id="email"
                            onChange={(event => {
                                const { value } = event.target;
                                setEmail(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="id_estado">Estado:</label>
                        <br/>
                        <input
                            type="number"
                            name='recfile'
                            id="estado"
                            onChange={(event => {
                                const { value } = event.target;
                                setEstado(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="id_provincia">Provincia:</label>
                        <br/>
                        <input
                            type="number"
                            name='recfile'
                            id="provincia"
                            onChange={(event => {
                                const { value } = event.target;
                                setProvincia(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <br/>
                        <input
                            type="text"
                            name='recfile'
                            id="nombre"
                            onChange={(event => {
                                const { value } = event.target;
                                setName(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label" htmlFor="pass">Contraseña: </label>
                        <br/>
                        <input
                            type="password"
                            name='recfile'
                            id="password"
                            onChange={(event => {
                                const { value } = event.target;
                                setPass(value);
                            })} />
                    </div>
                        <br/>
                    <div>
                        <label className="label"  htmlFor="apellido">Teléfono: </label>
                        <br/>
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
                <button style={{  width: '40%'}} className='btn btn-secondary'onClick={send}>Send</button>
            </header>
        </div>
        </>
    )

}

export default Registros;