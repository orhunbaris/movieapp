import { useState, useEffect, useReducer, useContext } from "react"
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import  {UserContext}  from "./UserContext.js"

import axios from "axios"




function LoginForm(){

    // Boolean state to check if the user is logged in or not
    const [logged, setLogged] = useState(false)
    // State to store users
    const [user, setUser] = useState({name:"", password: ""})
    // State to store already registered users
    const [registeredusers, setRegisteredUsers] = useState([]) 
    // State to store if the user is trying to log in or register
    const [formaction, setFormAction] = useState("")
    // navigation
    const navigate = useNavigate()
    // Current User Context
    const {currentUser, setCurrentUser} = useContext(UserContext)


    
    
    // fetching the registered users from db.json
    useEffect(()=>{
        axios.get("http://localhost:3000/data").then((res)=>{
    
          setRegisteredUsers(res.data)
          //console.log(registeredusers)
          
    
        }).catch((err) => {
    
          console.log('error')
    
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        const isRegistered = registeredusers.some(registeredusers => registeredusers.name === user.name && registeredusers.password === user.password)

        const matchedUser = registeredusers.find(registeredusers => registeredusers.name === user.name && registeredusers.password === user.password)
        
            if(formaction === "login"){
                    if(isRegistered)
                    {   
                        // If login process is successful update UserContext -> current_user and update isLogged which is passed by UserContext from parent component
                        setCurrentUser({current_username: user.name, isLogged: true, current_id: matchedUser.id, current_password: matchedUser.password, current_favlist: matchedUser.fav})
                        
                        navigate("/popular")
                        

                    }
                    else{

                        
                        alert("cannot log in...")
                    }
                }
            else if(formaction ==="register"){
                // POST REQUEST 
                console.log("this user is trying to register")

                // 
                const user_to_add_id = Math.floor(Math.random() * (1000 - 5) + 5)


                axios.post('http://localhost:3000/data/', {
                    id: user_to_add_id,
                    name: user.name,
                    password: user.password,
                    favoritelist: []
                } )
                .then(res=> {console.log(res.data)})
                .catch((err) => {
                    console.log("error")
                })
               
            }
                    
        
            
    }


    // function isRegisteredChecker(){

    //     console.log("now checking")

       

    //     for(let i=0; i<registeredusers.length; i++){
            
            
    //         // checks if the submitted credentials matches with any of the already registered users
    //         if(user.name === registeredusers[i].name && user.password === registeredusers[i].password )
    //         {
                


    //             console.log("this user is registered in the database")
    //             return true;
    //         }
            
            
    //     }
    //     return false;
    // }

    
    

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