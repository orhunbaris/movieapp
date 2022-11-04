
import axios from "axios"
import { API_URL_DATA } from "../constants/Constants"


function registeredUsersReducer(registeredUsers, action){
    switch(action.type)
     {
      case "GET":
          axios.get(API_URL_DATA).then((res)=>{
      
          return res.data
            
      
          }).catch((err) => {
      
            console.log('error fetching')
    
        })
      case "POST":
        //
        const userToAddId = Math.floor(Math.random() * (1000 - 5) + 5)


                axios.post(API_URL_DATA ,{
                    id: userToAddId,
                    name: action.payload.name,
                    password: action.payload.password,
                    favoritelist: []
                } )
                .then(res=> {console.log(res.data)})
                .catch((err) => {
                    console.log("error")
                })

      case "UPDATE":
        //
     }

  }

export default registeredUsersReducer