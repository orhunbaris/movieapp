import { useState,useEffect } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import MovieList from "../movielist/MovieList"


const adminUser = {
    name: "admin",
    password: "123"
}

function LoginForm({ }){

    // Boolean state to check if the user is logged in or not
    const [logged, setLogged] = useState(false)
    // State to store users
    const [user, setUser] = useState({name:"", password: ""})
    
    
    useEffect(()=>{
        console.log("getting already registered use")
    },[])





    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(user.name == adminUser.name && user.password == user.password)
        {
            setLogged(!logged)
            console.log("this user exists...")
            
        

        }
        
        <MovieList user={user} logged={logged}/>
            
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
                <Link to="/popular">
                    <button type="submit" className="submit-button">Login</button>
                </Link>    


            </form>
        </div>
    )

}

export default LoginForm