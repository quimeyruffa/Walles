import React, { Component } from 'react'


export default class DatosCompra extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cantidad: '',
            token: this.token,
            data:{
            precio: props.precio,
            id_vendedor: props.id_vendedor,
            id_producto:props.id_producto}
        }
       

    }
    token = localStorage.getItem('token');
    
    componentDidMount(){
        
        fetch('http://whales.matanga.net.ar:8000/productos/comprar', {
            method: 'POST',
            body:{
                importe: parseInt(this.props.precio,10),
                id_vendedor:parseInt( this.props.id_vendedor,10)},
                // id_producto:this.props.id_producto},
            headers: {
                'Content-type' : 'application/json',
                'x-access-token': this.state.token
            }
        }).then((response)=>{
            let estado= response.status;
            if(estado===201){
                console.log(response)
            }
            
        }).catch((error)=>{
            console.log(error)
        })

    }
    
    baseUrl = 'http://whales.matanga.net.ar:8000/productos/comprar'
    
    realizarCompra =  () => {
       
        
        // const data = {
        //     precio: this.props.precio,
        //     id_vendedor: this.props.id_vendedor,
        //     id_producto:this.props.id_producto
        // }
        // console.log(data)
        console.log(this.state.data.precio)

        fetch(this.baseUrl, {
            method: 'POST',
            body:{
                importe: parseInt(this.props.precio,10),
                id_vendedor:parseInt( this.props.id_vendedor,10)},
                // id_producto:this.props.id_producto},
            headers: {
                'Content-type' : 'application/json',
                'x-access-token': this.state.token
            }
        }).then((response)=>{
            let estado= response.status;
            if(estado===201){
                console.log(response)
            }
            
        }).catch((error)=>{
            console.log(error)
        })

    };

    handleChange3 = (event) => {
        const { value } = event.target;
        this.setState({
            cantidad: parseInt(value,10)
        })
    };

    handleChange2 = (event) => {
        const { value } = event.target;
        this.setState({
            password: { value }
        })
    };

    handleChange1 = (event) => {
        const { value } = event.target;
        this.setState({
            email: { value }
        })
    };

    render() {
        console.log(this.precio);
        return (
            <div>
                <div className=" col-6 form-group" style={{ padding: '3rem' }}>
                    <label> <b>Datos de la Compra </b></label>
                    <br />
                    <label>
                        Email:
                    </label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleChange1} />

                    <br />
                    <label> Contraseña: </label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange2}
                    />
                    <br />
                    <label> Cantidad: </label>
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        name="cantidad"
                        onChange={this.handleChange3}
                    />
                    <br />
                    <button onClick={this.realizarCompra} className='btn btn-primary' >Comprar</button>
                </div>
            </div>
        )
    }
}
