import React, { Component } from 'react'
import SinImagen from './ballenita3.png';
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            form:[]
        }
    }

    baseUrl = "http://whales.matanga.net.ar:8000/usuarios/profile";


    componentDidMount = async () => {

        var token = localStorage.getItem('token')
        console.log(token)
        await fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        }).then(res =>
            res.json().then((result) => {
               
                this.setState = ({
                    form:result.info_usuario[0]
                    })              
            })
            
            
            )
            console.log(this.state.form)

    }





    MisCompras = () => {
        window.location.href = './miscompras';
    }


    render() {
        const url = 'http://whales.matanga.net.ar:8000/' + this.state.imagenUsuario
        console.log(url)
        return (<>
            <div className='row'>
                <div className='col-12'>
                    <div className=' col-4 card' style={{ float: 'left', 'margin-top': '1rem', 'margin-left': '1rem', 'text-aling': 'center', 'background-color': 'lightgray' }}>
                        <div className='row'>
                            <div style={{ 'text-aling': 'center' }} className='col-12'>
                                <img style={{ width: '50%', height: '50%', margin: '2rem' }} alt='user' src={!this.state.imagenUsuario ? SinImagen : url} />
                                <br></br>
                                <b>{this.state.nombre}   {this.state.apellido}</b>
                                <p> {this.state.direccion}</p>

                                <button onClick={this.MisCompras} style={{ 'border-radius': '30px', margin: '1rem' }} className='btn-primary'>Mis Compras</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-5 card user-description offset-5' style={{ 'margin-top': '1rem', 'text-aling': 'center', 'background-color': 'lightgray' }} >
                        <br></br>
                        <b>Email:</b>  {this.state.email}
                        <hr></hr>
                        <b>Phone:</b> {this.state.telefono}
                        <hr></hr>
                        <b>Address:</b> {this.state.direccion}
                        <p></p>
                    </div>

                </div>

            </div>


        </>

        )
    }

}
export default Profile;