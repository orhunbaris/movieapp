import { useState, useEffect, useReducer } from "react"
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import MovieList from "../movielist/MovieList"
import axios from "axios"




function LoginForm({ }){

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
        
            if(formaction ==="login"){
                    if(isRegisteredChecker())
                    {
                    navigate("/popular")
                        

                    }
                    else{

                        // TODO: not registered alarm here
                        alert("cannot log in please register first")
                    }
                }
            else if(formaction ==="register"){
                // POST REQUEST 
                console.log("this user is trying to register")
                
                axios.post('https://localhost:3000/data/', {
                    name: user.name,
                    password: user.password
                } )
                .then(res=> {console.log(res.data)})
                .catch((err) => {
                    console.log("error")
                })
               
            }
                    
        
            
    }


    function isRegisteredChecker(){

        console.log("now checking")
        for(let i=0; i<registeredusers.length; i++){

            console.log(registeredusers[i].name)
            // checks if the submitted credentials matches with any of the already registered users
            if(user.name === registeredusers[i].name && user.password === registeredusers[i].password )
            {
                console.log("this user is registered in the database")
                
                return true;
            }
            else {
                console.log("this user is NOT registered in the database")
                return false;
            }

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