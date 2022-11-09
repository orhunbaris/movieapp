import { useContext, useState } from "react";

import { UserContext } from "../components/UserContext";

function MovieCard({ movie }) {
  const [favoriteclick, setFavoriteClick] = useState(false);

  const { currentUser, addFavoriteMovie, removeFavoriteMovie } =
    useContext(UserContext);

  const handleOnClick = () => {
    setFavoriteClick(!favoriteclick);
    if (!favoriteclick) {
      addFavoriteMovie(movie.title);
      console.log("adding");
    } else {
      removeFavoriteMovie(movie.title);
      console.log("removing");
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <label className="movie-card-title-label">Title</label>
      <div className="movie-card-title">{movie.title}</div>
      {/* <label className="movie-card-overview-label">Overview</label>
            <p className="movie-card-overview">{movie.overview}</p> */}
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt="movie_card_image"
        className="movie-card-image"
      />
      {currentUser.favoritelist.includes(movie.title) ? (
        <img
          src="https://img.icons8.com/ios-filled/50/000000/christmas-star.png"
          onClick={handleOnClick}
          alt="star-filled"
        />
      ) : (
        <img
          src="https://img.icons8.com/ios/50/000000/christmas-star.png"
          onClick={handleOnClick}
          alt="star-empty"
        />
      )}
    </div>
  );
}

export default MovieCard;
