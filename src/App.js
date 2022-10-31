import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import { Route, Routes } from "react-router-dom";

import MovieList from "./movielist/MovieList.js";
import Navbar from "./shared/Navbar.js";
import LoginForm from "./components/LoginForm.js";
import Home from "./shared/Home.js";




 const apiKey = process.env.REACT_APP_API_KEY 

 


function App() {


  return (  
    <>      
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<MovieList/>} />
            <Route path="/login" element={<LoginForm />} />
        </Routes>
    </>
  )
}

export default App;
