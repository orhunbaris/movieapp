import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import { Route, Routes } from "react-router-dom";

import MovieList from "./movielist/MovieList.js";
import Navbar from "./shared/Navbar.js";
import LoginForm from "./components/LoginForm.js";
import Home from "./shared/Home.js";

import { UserContext } from "./components/UserContext.js";






 


function App() {

  const [currentUser, setCurrentUser] = useState(
    {
    current_username: "",
    isLogged: false
    }
  )



  return (  
    <UserContext.Provider value={{currentUser, setCurrentUser}}>      
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<MovieList/>} />
            <Route path="/login" element={<LoginForm />} />
        </Routes>
    </UserContext.Provider>
  )
}

export default App;
