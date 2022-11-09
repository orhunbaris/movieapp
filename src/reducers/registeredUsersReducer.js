
export default function  registeredUsersReducer(registeredUsers, action){

    switch(action.type){

        case "FetchAll":{
                return action.payload
            }
        case "AddNewUser":{
                return [...registeredUsers, action.payload]
            }
        case "UpdateFavoriteList":{
                let movieToAdd = action.movieToAdd
                let currentUserId = action.id
                let i = registeredUsers.findIndex(element=>element.id === currentUserId)
                registeredUsers[i].favoritelist = [...registeredUsers[i].favoritelist, movieToAdd ]
                return registeredUsers;   
            }
        case "DeleteFromFavoriteList":{  
                let currentUserId = action.id
                let i = registeredUsers.findIndex(element=>element.id === currentUserId)
                registeredUsers[i].favoritelist = action.updatedList
                return registeredUsers;
            }
        default:
            throw Error("unknown action...")
    }

}