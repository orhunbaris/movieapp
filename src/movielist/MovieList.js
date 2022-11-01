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


    
        return(
            <div>
                <h2>Popular movies</h2>
                {
                    movies.map((movie, index) => {
                        return (
                            <div className="movies-list"key={index}>
                                
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })
                }
            </div>
        )

   

}

export default  MovieList