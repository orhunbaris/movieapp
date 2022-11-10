import MovieAddButton from "./MovieAddButton"



function DetailCard(movie) {
    return(
        <div>
            <h1>{movie.title}</h1>
            <label className="detail-card-overview-label"></label>
            <p>{movie.overview}</p>
        </div>
    )
}

export default DetailCard