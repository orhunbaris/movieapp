import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import { Route, Routes } from "react-router-dom";

import MovieList from "./movielist/MovieList.js";
import Navbar from "./shared/Navbar.js";
import LoginForm from "./components/LoginForm.js";
import Home from "./shared/Home.js";

import { UserContext } from "./components/UserContext.js";
import { API_URL_DATA } from "./constants/Constants.js";
import registeredUsersReducer  from "./reducers/registeredUsersReducer.js";





const initialState = [] 



function App() {

  const [currentUser, setCurrentUser] = useState(
    {
    currentId: null,
    currentUsername: "",
    isLogged: false
    }
  )

  

  const [registeredUsers, dispatch] = useReducer(registeredUsersReducer, initialState)


  return (  
    
    <UserContext.Provider value={{currentUser, setCurrentUser}}>      
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
          { currentUser.isLogged &&
            <Route path="/popular" element={<MovieList/>} />
          }
            <Route path="/login" element={<LoginForm />} />
        </Routes>
    </UserContext.Provider>
  )
}

export default App;
