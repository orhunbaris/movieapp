import { useEffect, useState } from "react"
import MovieCard from "./MovieCard.js"
import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY 



function MovieList ({logged}){

    const [movies, setMovies] = useState([])

    
  
  
    

    useEffect(()=>{
        // with each user, rerun the fetch
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then((res)=>{
    
          setMovies(res.data.results)
    
        }).catch((err) => {
    
          console.log('error')
    
        })
        
      },[])

    if(logged)
    {
        return(
            <div>
                <h2>Popular movies</h2>
                {
                    movies.map((movie, index) => {
                        return (
                            <div className="movies-list"key={index}>
                                {/* <li key={index} onClick={(e)=>setToWatch(movie.title)}>
                                    {movie.title}
                                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie_card_image"/>
                                </li> */}
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else
        return

}

export default  MovieList