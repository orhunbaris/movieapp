import { useEffect, useState } from "react"



function MovieList ({movies, logged}){

    const [towatch, setToWatch] = useState("")

    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        console.log(towatch)
    },[towatch])

    if(logged)
    {
        return(
            <div>
                <h2>Popular movies</h2>
                {
                    movies.map((movie, index) => {
                        return <li key={index} onClick={(e)=>setToWatch(movie.title)}>{movie.title}</li>
                    })
                }
            </div>
        )
    }
    else
        return

}

export default  MovieList