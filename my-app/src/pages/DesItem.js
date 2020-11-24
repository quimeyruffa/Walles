import React, { Component } from 'react'

export default class DesItem extends Component {
    constructor(){
        super();
        this.state={
            id_producto: ''
        }
    }

    componentWillMount(){
        let id = localStorage.getItem('id_producto')
        this.setState({
            id_producto: id
        })
    }
    render() {
        return (
            <div>
                {this.state.id_producto}
            </div>
        )
    }
}
