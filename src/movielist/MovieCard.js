import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../components/UserContext"
import axios from "axios"


function MovieCard({movie}){

    const [favoriteclick, setFavoriteClick] = useState(false)

    const {currentuser} = useContext(UserContext)
    
    const movie_to_be_added = movie.title

    
    const handleOnClick = () => {
        
        setFavoriteClick(!favoriteclick)

    }


    return(
        <div key={movie.id} className="movie-card">
            <label className="movie-card-title-label">Title</label>
            <div className="movie-card-title">{movie.title}</div>
            {/* <label className="movie-card-overview-label">Overview</label>
            <p className="movie-card-overview">{movie.overview}</p> */}
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie_card_image" className="movie-card-image"/>
            {
                favoriteclick ?
                <img src="https://img.icons8.com/ios-filled/50/000000/christmas-star.png" onClick={handleOnClick}/>
                :
                <img src="https://img.icons8.com/ios/50/000000/christmas-star.png"onClick={handleOnClick}/>
            } 
        </div>
    )
}


export default MovieCard