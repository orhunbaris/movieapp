
import axios from "axios"
import { useReducer } from "react"
import { API_URL_DATA } from "../constants/Constants"


export default async function  registeredUsersReducer(registeredUsers, action){

    switch(action.type){

        case "FetchAll":
            {
                return action.payload
            }
        case "AddNewUser":
            {
                return [...registeredUsers, action.payload]
            }
        case "UPDATEUSER":
            {
                break
            }
        case "DELETEUSER":
            {
                break
            }
    }

}