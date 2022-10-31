import { useState } from "react"
import { Link } from "react-router-dom"


function MovieCard({movie}){

   


    return(
        <div key={movie.id} className="movie-card">
            <label className="movie-card-title-label">Title</label>
            <div className="movie-card-title">{movie.title}</div>
            <label className="movie-card-overview-label">Overview</label>
            <p className="movie-card-overview">{movie.overview}</p>
            <Link>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie_card_image"/>
            </Link>
        </div>
    )
}


export default MovieCard