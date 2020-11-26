import React, { useEffect, useState } from 'react'
import SinImagen from './ballenita3.png';
const Profile = () => {


    const [user, setUser] = useState({
        id_usuario: null,
        apellido: '',
        nombre: '',
        ciudad: '',
        direccion: '',
        imagen:'',
        dni: null,
        pass: '',
        email: '',
        provincia: '',
        telefono: ''
    })

    const baseUrl = "http://whales.matanga.net.ar:8000/usuarios/profile";

    useEffect(() => {
        var token = localStorage.getItem('token')
        console.log(token)
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        }).then(res =>
            res.json().then((result) => {
                console.log('Array base datos: ')
                console.log(result.info_usuario[0].imagen)
                let img = result.info_usuario[0].imagen
                let info = result.info_usuario[0]
                
                setUser(
                    {
                        id_usuario: info.id_usuario,
                        apellido: info.apellido,
                        imagen:img,
                        email: info.email,
                        nombre: info.nombre,
                        ciudad: info.ciudad,
                        direccion: info.direccion,
                        dni: info.dni,
                        pass: info.pass,
                        provincia: info.provincia,
                        telefono: info.telefono
                        
                    })

            })

        )
        localStorage.setItem('id_usuario',user.id_usuario )

    }, [])







    const MisCompras = () => {
        window.location.href = './miscompras';
    }

    const ProductoNuevo = () => {
        window.location.href = './agregarProducto';
    }
    const MisProductos = () => {
        window.location.href = './misProducto';
    }

    const url = 'http://whales.matanga.net.ar:8000/' + user.imagen
    console.log(url)
    return (<>
        <div className='row'>
            <div className='col-12'>
                <div className=' col-4 card' style={{ float: 'left', 'margin-top': '1rem', 'margin-left': '1rem', 'text-aling': 'center', 'background-color': 'lightgray' }}>
                    <div className='row'>
                        <div style={{ 'text-aling': 'center' }} className='col-12'>
                            <img style={{ width: '50%', height: '50%', margin: '2rem' }} alt='user' src={user.imagenUsuario ? SinImagen : url} />
                            <br></br>
                            <b>{user.nombre}   {user.apellido}</b>
                            <p> {user.direccion}</p>

                            <button onClick={MisCompras} style={{ 'border-radius': '15px', margin: '1rem' }} className='btn-primary'>Mis Compras</button>
                            <button onClick={MisProductos} style={{ 'border-radius': '15px', margin: '1rem' }} className='btn-primary'>Mis Productos</button>
                            <button onClick={ProductoNuevo} style={{ 'border-radius': '15px', margin: '1rem' }} className='btn-primary'>Agregar Producto</button>
                        </div>
                    </div>
                </div>
                <div className='col-5 card user-description offset-5' style={{ 'margin-top': '1rem', 'text-aling': 'center', 'background-color': 'lightgray' }} >
                    <br></br>
                    <b>Email:</b>  {user.email}
                    <hr></hr>
                    <b>Phone:</b> {user.telefono}
                    <hr></hr>
                    <b>Address:</b> {user.direccion}
                    <p></p>
                </div>

            </div>

        </div>


    </>

    )


}
export default Profile;