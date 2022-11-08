import { useContext } from "react";
import { UserContext } from "../components/UserContext";


function Home() {

    const {currentUser} = useContext(UserContext) 


    console.log(currentUser.name)

    console.log(currentUser.favoritelist)

    if(currentUser.isLogged === true){

        return(
         // If the user is logged in home page will dispaly that users current watch list   
                <>
                {
                    currentUser.favoritelist.map((movie, index) => {
                        return(
                            <li key={index}>
                                
                            </li>
                        )
                    })
                }
                </>
    )
    }
    else{
        return(
            // If the user is logged in home page will dispaly that users current watch list   
           <>
               <h1>Welcome to Orhun's Movie App</h1>
           </>
       )
    }
}

export default Home;