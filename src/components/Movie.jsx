import React, { useState } from 'react';
import Imagen from '../images/no_disponible.png';
import './Movie.css'
import { Modal} from '@material-ui/core';



const Movie = ({movie}) => {
    const [modal,setModal]= useState (false);
    let poster="";


    


    const abrirCerrarModal=()=>{
        setModal(!modal);
    }


    if(movie.poster_path==null){
        poster=Imagen;

        
    }else{
        poster="http://image.tmdb.org/t/p/w185"+movie.poster_path;
    }
    
    if(movie.overview.length===0){
        movie.overview="Overview no disponible para esta pelicula";
    }
    return (<div key={movie.id} onClick={abrirCerrarModal} className="movie"> 
        <span className="titulo">{movie.title}</span>
        <img src={poster} alt=""/>
        <span className="titulo-original">Titulo original: ({movie.original_title})</span>
        <span className="valoracion">Valoración: {movie.vote_average}</span>
        <span className="overview">{movie.overview}</span>
        <Modal open={modal} onClose={!modal}> 
            <div className="modal">
                <div className="datos">
                    <div className="imagen"> 
                        <img className="imagenPortada" src={poster} alt=""/>
                        <h4 className="puntuacion">Puntuacion: {movie.vote_average}</h4>
                        <h4 className="numeroVotos">Numero de votos: {movie.vote_count}</h4>

                    </div>
                    <div className="datosPelicula">
                        <h3 className="titulo">{movie.title}</h3>
                        <h4>Titulo original: {movie.original_title}</h4>

                        <h4>Fecha Lanzamiento: {movie.release_date}</h4>
                        <p><b>Overview: </b><br/>{movie.overview}</p>
                    </div>
                </div>
                <div className="botonCerrar">
                <button className="cerrar" onClick={abrirCerrarModal}>Cerrar</button>
                </div>
            </div>

        </Modal>
    </div>
    
    )

}


export default Movie;