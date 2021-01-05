import React from 'react';
import Movies from './Movies.jsx';
import './SearchForm.css';

class SearchForms extends React.Component {
    constructor(props){
        super(props);
        this.state={search:"",
                    valor:""}
    }

    handleChange=(e)=>{
        this.setState({search:e.target.value})
                                                                                           
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.search!==""&& this.state.search!==undefined){
            this.setState({valor:`https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${this.state.search}`});
        }
        this.setState({search:""});
        


    }
    handleSubmitPopular=(e)=>{
        e.preventDefault();
        this.setState({valor:`https://api.themoviedb.org/3/movie/popular?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es`});
        this.setState({search:""});

    }

    render(){
        return(<div>
            <h1 className="miNombre">Practica Juan Antonio Roldan</h1>
            <form>
                <div>
                    <input type="text" value ={this.state.search} onChange={this.handleChange} placeholder="Titulo pelicula"></input>
                    <button className="botonbuscar" type="submit" value="Buscar" onClick={this.handleSubmit}>Buscar</button>
                </div>
                <div>
                    <button className="botonPopular" onClick={this.handleSubmitPopular}>10 Peliculas populares</button>
                </div>

            </form>
            <Movies search={this.state.valor}/>
            </div>
        )
        }

}

export default SearchForms;