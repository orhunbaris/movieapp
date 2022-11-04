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






const initialUsers = []


function App() {

  const [currentUser, setCurrentUser] = useState(
    {
    currentId: null,
    currentUsername: "",
    isLogged: false
    }
  )

  
  const [registeredUsers, dispatch] = useReducer(registeredUsersReducer, initialUsers)  

  useEffect(()=>{
    dispatch({type: "GET"
  })
    
  },[])

  return (  
    
    <UserContext.Provider value={{currentUser, setCurrentUser, registeredUsers, dispatch}}>      
        <Navbar />
        <Routes>
          {registeredUsers.map((user)=><h1>{user.name}</h1>)
          }
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
