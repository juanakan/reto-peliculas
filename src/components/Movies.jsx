import axios from 'axios';
import React, {useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = ({search})=> {

    let listMovies = [];

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        axios.get(search)
        .then(res=>setMovies(res.data.results))
        .catch(console.error)
        },[search]);

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