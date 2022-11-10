import  CardContent  from "@mui/material/CardContent"
import  CardActions  from "@mui/material/CardActions"
import  CardMedia  from "@mui/material/CardMedia"
import  Button  from "@mui/material/Button"
import  Typography from "@mui/material/Typography"
import  Card  from "@mui/material/Card"

import { useState } from "react"

function MovieCardUpdate ({movie}) {

    const [favoriteclick, setFavoriteClick] = useState(false)


    const handleOnClick = () => {
        
        setFavoriteClick(!favoriteclick)
    }

    return(
        
        <Card sx={{maxWidth: 345}} className="movie-list-item">
            <CardMedia
                component="img"
                height="140"
                image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Add to watch list</Button>

            </CardActions>
        </Card>
        
    )
}

export default MovieCardUpdate