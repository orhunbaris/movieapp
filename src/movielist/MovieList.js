import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard.js";
import axios from "axios";
import { UserContext } from "../components/UserContext.js";
import Container from "@mui/material/Container";

const apiKey = process.env.REACT_APP_API_KEY;

const movieDataBaseUrl = process.env.REACT_APP_MOVIE_API_URL;

let initialPageNumber = 1;

function MovieList() {
  const [movies, setMovies] = useState([]);

  //const {currentUser} = useContext(UserContext)

  // var currentUserName = localStorage.getItem('currentUser')
  //console.log(currentUserName)

  window.onscroll = function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      // Get the next 20 of the popular movies

      //console.log("At the bottom, now getting the next page of movies")
      axios
        .get(
          movieDataBaseUrl +
            `${apiKey}&language=en-US&page=${initialPageNumber}`
        )
        .then((res) => {
          setMovies([...movies, ...res.data.results]);
        })
        .catch((err) => {
          console.log("error");
        });
      initialPageNumber = initialPageNumber + 1;
    }
  };

  //console.log(movies)

  useEffect(() => {
    // with each user, rerun the fetch

    //console.log(movieDataBaseUrl)
    axios
      .get(
        movieDataBaseUrl + `${apiKey}&language=en-US&page=${initialPageNumber}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10">
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
