import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import Buscardor from '../component/Buscardor'
import '../css/Menu.css';
import { Link } from 'react-router-dom';
import Resultado from '../component/Resultado'


const cookies = new Cookies();
export default class Menu extends Component {

    state = {
        termino: '',
        imagenes: [],
        pagina:''
    }

    scroll = () =>{
        const elemento = document.querySelector(".jumbotron");
        elemento.scrollIntoView('smooth','start');
    }


    componentDidMount() {
        if (!cookies.get("username")) {
            window.location.href = "./";
        }
    }
    consultarApi = () => {
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=18969526-82cc74d3f89adf2aebdbe40d4&q=${this.state.termino}&per_page=30&page=${pagina}`

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ imagenes: resultado.hits }))
    }

    datosBusqueda = (termino) => {
        this.setState({
            termino: termino,
            pagina:1
        }, () => {
            this.consultarApi();
        })
    }
    paginaAnterior =()=>{
          //leer estado pagina
          let pagina = this.state.pagina;    

          if(pagina === 1) return null;
          //restar
          pagina-=1;
          //agregar cambio
          this.setState({
              pagina
          },()=>{
              this.consultarApi();
              this.scroll();
          });

    }
    paginaSiguiente= () =>{
        //leer estado pagina
        let pagina = this.state.pagina;
        //sumar
        pagina+=1;
        //agregar cambio
        this.setState({
            pagina
        },()=>{
            this.consultarApi();
            this.scroll();
        });
    }
    render() {
        return (
            <div className="app container-fluid">
                <div className="jumbotron">
                    <Link to="/profile" className="link"> Profile </Link>
        
                    <p className="lead text-center col-md-12"> Buscar </p>
                    <Buscardor
                        datosBusqueda={this.datosBusqueda}
                    />
                </div>
                <div className="row justify-content-center">
                    <Resultado
                        imagenes={this.state.imagenes}
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
                <br />
            
            </div>
        )
    }
}