import React from 'react'
import Cookies from 'universal-cookie';
const Profile = () => {

    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove('id', { path: '/' });
        cookies.remove('nombre', { path: '/' });
        cookies.remove('apellido', { path: '/' });
        cookies.remove('username', { path: '/' });
        window.location.href = './';

    }
    // AGREGAR NUEVO PRODUCTO
    const agregarProducto = () =>{
        window.location.href = './newProduct';
    }

    return (<>
            <button onClick={()=>agregarProducto()}> Agregar </button>
            <button onClick={() => cerrarSesion()}> Cerrar Sesion </button>
             </>
       
        )
    
}
export default Profile;