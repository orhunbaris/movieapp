import { useState, useEffect, useReducer, useContext } from "react"
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import  {UserContext}  from "./UserContext.js"
import  { API_URL_DATA}  from "../constants/Constants.js"
import registeredUsersReducer from "../reducers/registeredUsersReducer.js"

import axios from "axios"



const initialState = []

function LoginForm(){

    // Boolean state to check if the user is logged in or not
    const [logged, setLogged] = useState(false)
    // State to store users
    const [user, setUser] = useState({name:"", password: ""})
    // State to store already registered users
    const [registeredUsers, dispatch] = useReducer(registeredUsers, initialState)
    // State to store if the user is trying to log in or register
    const [formAction, setFormAction] = useState("")
    // navigation
    const navigate = useNavigate()
    // Current User Context
    const {currentUser, setCurrentUser} = useContext(UserContext)


    
    
    // fetching the registered users from db.json
    useEffect(()=>{
        dispatch({type: 'GET'})
    },[])


    

    const handleSubmit = (e) => {
        e.preventDefault()

     


        const isRegistered = registeredUsers.some(registeredUsers => registeredUsers.name === user.name && registeredUsers.password === user.password)
        



        const matchedUser = registeredUsers.find(registeredUsers => registeredUsers.name === user.name && registeredUsers.password === user.password)
        
            if(formAction === "login"){
                    if(isRegistered)
                    {   
                        // If login process is successful update UserContext -> current_user and update isLogged which is passed by UserContext from parent component
                        setCurrentUser(
                            {
                             currentUsername: user.name,
                             isLogged: true, 
                             currentId: matchedUser.id,
                            }
                        )
                        
                        navigate("/popular")
                        

                    }
                    else{

                        
                        alert("cannot log in...")
                    }
                }
            else if(formAction ==="register"){
                // POST REQUEST 
                // console.log("this user is trying to register")

                // 
            dispatch({
                type: "POST",
                payload: {
                    name: user.name,
                    password: user.password
                }
            })
               
            }
                    
        
            
    }
    
    

    return(
        <div>
            <h1>Welcome!</h1>
            
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="inner-form-element">
                    <label className="label-name">Name</label>
                    <input type="text"  id="name" placeholder="Your Name" onChange={(e) => setUser({...user, name: e.target.value })}></input>
                </div>
                <div className="inner-form-element">
                    <label className="label-password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value })}></input>
                </div>
                    <button type="submit" className="submit-button" value="login" onClick={() => setFormAction("login") } >Login</button>
                    <button type="submit" className="submit-button" value="register" onClick={()=> setFormAction("register")}>Register</button>
                    
            </form>
            
        </div>
    )

}

export default LoginForm