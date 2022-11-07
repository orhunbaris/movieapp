
import axios from "axios"
import { useReducer } from "react"
import { API_URL_DATA } from "../constants/Constants"


export default function  registeredUsersReducer(registeredUsers, action){

    switch(action.type){

        case "FetchAll":
            {
                return action.payload
            }
        case "AddNewUser":
            {
                return [...registeredUsers, action.payload]
            }
        case "UpdateFavoriteList":
            {
                let movieToAdd = action.payload.movieToAdd

                let currentUserId = action.id

                let i = registeredUsers.findIndex(element=>element.id === currentUserId)

                registeredUsers[i].favoritelist = [...registeredUsers[i].favoritelist, movieToAdd ]
                
                return registeredUsers;
            }
        case "DeleteFromFavoriteList":
            {
               

                let currentUserId = action.id

                let i = registeredUsers.findIndex(element=>element.id === currentUserId)
                console.log(i)
                registeredUsers[i].favoritelist = action.filteredList

                return registeredUsers;
            }
        default:
            throw Error("unknown action...")
    }

}