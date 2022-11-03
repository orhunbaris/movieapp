import { useEffect, useState, useContext} from "react"
import MovieCard from "./MovieCard.js"
import axios from "axios"
import { UserContext } from "../components/UserContext.js"
import MovieCardUpdate from "./MovieCardUpdate.js"
import { Grid, ImageList } from "@mui/material"
import { height } from "@mui/system"
import Container from "@mui/material/Container"




const apiKey = process.env.REACT_APP_API_KEY




function MovieList ({}){

    const [movies, setMovies] = useState([])

    const {currentUser} = useContext(UserContext)

    
  
  
    

    useEffect(()=>{
        // with each user, rerun the fetch
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then((res)=>{
    
          setMovies(res.data.results)
    
        }).catch((err) => {
    
          console.log('error')
    
        })
        
      },[])


        if(currentUser.isLogged === true)
        {
            return(
                <Container className="movie-list" sx={{}} >
                    
                        {
                            movies.map((movie, index) => {
                                return (
                                
                                        <MovieCard movie={movie} />
                                    
                                )
                            })
                        }
                </Container>
            )
        }
        else{
            
            return <h1>Please log in before you continue</h1>
        }
   

}

export default  MovieList