import { useContext } from "react"
import { UserContext } from "../components/UserContext"




function LogOutButton(){

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const handleOnClick = () => {
    // TO DO: set Current User to null and isLogged = false

    }



    return(
        <>
            <button onClick={hande}>Log Out</button>
        </>
    )

}

export default LogOutButton