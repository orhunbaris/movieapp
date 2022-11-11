import { useContext, useState } from "react";
import MovieCardModal from "./MovieCardModal";

import { UserContext } from "../components/UserContext";

function MovieCard({ movie }) {
  const [favoriteclick, setFavoriteClick] = useState(false);

  const { currentUser, addFavoriteMovie, removeFavoriteMovie } =
  useContext(UserContext);

  const [modalToggle, setModalToggle] = useState(false)

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

  const learnMoreClicked = () => {
    setModalToggle(!modalToggle)
    
  }

  return (
    <div key={movie.id} className="movie-card max-w-sm rounded overflow-hidden shadow-lg text-lg text-center">

      <h1 className="movie-card-title text-center text-xl text-white">{movie.title}</h1>  
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
      {/* <button className="text-white cursor-pointer text-xl" onClick={learnMoreClicked}>
        Learn more
      </button>
      {
        modalToggle && <MovieCardModal movie={movie}/>
      } */}
      
      
    </div>
  );
}

export default MovieCard;
