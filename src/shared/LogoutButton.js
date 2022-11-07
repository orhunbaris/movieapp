import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../components/UserContext"





function LogOutButton(){

    const { setCurrentUser} = useContext(UserContext)

    const navigate = useNavigate()



    const handleOnClick = () => {
    // TO DO: set Current User to null and isLogged = false
    setCurrentUser({
        isLogged: false
    })
    navigate("/login")

    }



    return(
        <>
            <button onClick={handleOnClick}>Log Out</button>
        </>
    )

}

export default LogOutButton