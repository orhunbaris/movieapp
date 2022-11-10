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
    <div key={movie.id} className="movie-card max-w-sm rounded overflow-hidden shadow-lg text-lg">

      <h1 className="movie-card-title text-center">{movie.title}</h1>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt="movie_card_image"
        className="movie-card-image w-full"
      />
      
      {currentUser.favoritelist.includes(movie.title) ? (
        <img
          src="/assets/blue_star_filled.png"
          onClick={handleOnClick}
          alt="star-filled"
        />
      ) : (
        <img
          src="/assets/blue_star_empty.png"
          onClick={handleOnClick}
          alt="star-empty"
        />
      )}
    </div>
  );
}

export default MovieCard;
