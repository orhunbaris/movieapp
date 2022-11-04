
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

                let currentUserId = action.payload.id

                let i = registeredUsers.indexOf(element=>element.id === currentUserId)

                registeredUsers[i].favoritelist = [...registeredUsers[i].favoritelist, movieToAdd ]
                console.log(registeredUsers)
                break;
            }
        case "DELETEUSER":
            {
                break
            }
        default:
            throw Error("unknown action...")
    }

}