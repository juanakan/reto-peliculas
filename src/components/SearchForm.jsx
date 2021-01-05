import React from 'react';
import Movies from './Movies.jsx';
import './SearchForm.css';

class SearchForms extends React.Component {
    constructor(props){
        super(props);
        this.state={searchInput:"",
                    search:""}
    }

    // metemos el valor del input
    handleChange=(e)=>{
        this.setState({searchInput:e.target.value})
                                                                                           
    }
    
    //metodo para el buscador de peliculas en el que si el input no esta vacio lo metemos en la variable search
    // luego searchInput lo dejamos vacio para que no de error
    handleSubmitSearch=(e)=>{
        e.preventDefault();
        if(this.state.searchInput!==""&& this.state.searchInput!==undefined){
            this.setState({search:`https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${this.state.searchInput}`});
        }
        this.setState({searchInput:""});
    }

    // hacemos lo mismo con las peliculas populares
    handleSubmitPopular=(e)=>{
        e.preventDefault();
        this.setState({search:`https://api.themoviedb.org/3/movie/popular?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es`});
        this.setState({searchInput:""});
    }

    render(){
        return(<div>
            <h1 className="miNombre">Practica Juan Antonio Roldan</h1>
            <form>
                <div>
                    <input type="text" value ={this.state.searchInput} onChange={this.handleChange} placeholder="Titulo pelicula"></input>
                    <button className="botonbuscar" type="submit" value="Buscar" onClick={this.handleSubmitSearch}>Buscar</button>
                </div>
                <div>
                    <button className="botonPopular" onClick={this.handleSubmitPopular}>Peliculas populares</button>
                </div>
            </form>
                <Movies search={this.state.search}/>
            </div>
        )
        }
}

export default SearchForms;