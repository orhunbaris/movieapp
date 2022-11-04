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


  const fetchUsers = () => {
    axios.get(API_URL_DATA)
      .then((res)=>{
        dispatch({type: "FetchAll", payload: res.data})
      })
      .catch((err)=>{
        console.log("error fetching user data")
      })
  }


const addNewUser = (newUser) => {
  
  axios.post(API_URL_DATA, newUser)
  .then((res) => {
    dispatch({type:"AddNewUser",
              payload: newUser               
             })
  })
  .catch((err)=>{
    console.log("error adding new user")
  })
  
}

  useEffect(()=>{
    dispatch({type: "FetchAll"})
    console.log("fetched all users")
    
  },[])

  

 
  return (  
    
    <UserContext.Provider value={{currentUser, setCurrentUser, registeredUsers, dispatch, addNewUser, fetchUsers}}>      
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
