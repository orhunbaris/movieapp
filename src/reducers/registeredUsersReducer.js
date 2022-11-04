
import axios from "axios"
import { useReducer } from "react"
import { API_URL_DATA } from "../constants/Constants"


export default async function  registeredUsersReducer(registeredUsers, action){


    
    switch(action.type){

        case "GET":
            {
                const response = await axios.get(API_URL_DATA)
                .then((res)=>
                    {
                            return res.data
                    })
                .catch((err) => 
                    {
                            console.log('error getting data')
                    })
                    console.log("response is" , response)
                    return [...response]
            }
        case "POST":
            {
                axios.post(API_URL_DATA , action.payload)
                .then(res=> 
                    {
                        return [...registeredUsers, res.data]
                    })
                .catch((err) => {
                        console.log("error registering new user")
            })
            break
            }
        case "UPDATE":
            {
                break
            }
        case "DELETE":
            {
                break
            }
    }

}