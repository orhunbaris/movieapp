import { useEffect, useState, useContext} from "react"
import MovieCard from "./MovieCard.js"
import axios from "axios"
import { UserContext } from "../components/UserContext.js"
import Container from "@mui/material/Container"




const apiKey = process.env.REACT_APP_API_KEY
let initialPageNumber = 1




function MovieList (){

    const [movies, setMovies] = useState([])

    const {currentUser} = useContext(UserContext)

    
    
    window.onscroll = function(){
     if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
      // Get the next 20 of the popular movies
      
      //console.log("At the bottom, now getting the next page of movies")
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${initialPageNumber+1}`).then((res)=>{
    
          setMovies([...movies, ...res.data.results])
    
        }).catch((err) => {
    
          console.log('error')
    
        })
      initialPageNumber = initialPageNumber + 1
     }
    }

   //console.log(movies)


    useEffect(()=>{
        // with each user, rerun the fetch
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${initialPageNumber}`).then((res)=>{
    
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
                                
                                        <MovieCard  key={index} movie={movie} />
                                    
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