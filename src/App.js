import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import { Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar.js";
import WelcomeForm from "./components/WelcomeForm.js";
import Home from "./components/Home.js";



const apiKey = '57b92da527edbfd737fd2684ebb48833'


function App() {

 

  const [movies, setMovies] = useState([])
  const [logged, setLogged] = useState(false)

  const [user, setUser] = useState({name:"", password: ""})

  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then((res)=>{

      setMovies(res.data.results)

    }).catch((err) => {

      console.log('error')

    })

  },[])
  

  const handleSubmit = (e) => {
    // control username and password here
    e.preventDefault()
    setLogged(!logged)
  }
  

  return (  
    <>      
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<MovieList movies={movies} logged={logged}/>} />
            <Route path="/welcome" element={<WelcomeForm handleSubmit={handleSubmit} user={user} setUser={setUser}/>} />
        </Routes>
    </>
  )
}

export default App;
