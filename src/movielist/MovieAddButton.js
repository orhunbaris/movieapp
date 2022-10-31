import { useState } from "react"







function MovieAddButton() {

    // This button adds picked movie to the custom json database for that specific username.
    
    return(
    
        <div>
            <form className="movie-submit-form">
                <button type="submit">Add to my watch list</button>
            </form>     
        </div>
    )

    
}

export default MovieAddButton