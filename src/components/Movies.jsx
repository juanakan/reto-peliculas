import axios from 'axios';
import React, {useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = ({search})=> {

    // creamos listMovies para meter las peliculas recibidas
    let listMovies = [];

    const [movies,setMovies]=useState([]);

    //recibimos la busqueda y obtenemos los resultados
    useEffect(()=>{
        axios.get(search)
        .then(res=>setMovies(res.data.results))
        .catch(console.error)
        },[search]);

        // si la pelicula es popular metemos las 10 mas populares en nuestra variable listMovies
        if (search==="https://api.themoviedb.org/3/movie/popular?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es" && movies!==undefined){
            listMovies=movies.slice(0,10);
            }
        else{
            listMovies=movies;
            }
      
    return (
        <div className ="movies">
            {listMovies?.map(movie=><Movie movie= {movie}/>)}
        </div>
)}

export default Movies;