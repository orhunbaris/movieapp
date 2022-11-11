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

      <h1 className="movie-card-title text-center text-white">{movie.title}</h1>  
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt="movie_card_image"
        className="movie-card-image w-full"
      />
      
      



      {currentUser.favoritelist.includes(movie.title) 
      ? (
        <div
          className="text-center text-lime-500 cursor-pointer"
          onClick={handleOnClick}
          alt="favorite-clicked"
        >
          Add to Watch List
        </div>) 
      : (
        <div 
          className="text-center text-lime-200 cursor-pointer"
          onClick={handleOnClick}
          alt="favorite-clicked"
        >
          Add to Watch List
        </div>
      )}
    </div>
  );
}

export default MovieCard;
