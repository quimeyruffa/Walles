import React, { Component } from 'react'

export default class UserProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{
                nombre:'Camila'
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.form.nombre}
            </div>
        )
    }
}
