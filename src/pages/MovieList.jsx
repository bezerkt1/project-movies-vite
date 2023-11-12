import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCover from "../components/MovieCover/MovieCover";
import BackButton from "../components/BackButton/BackButton";
import PageButtons from "../components/PageButtons/PageButtons";
import "./MovieList.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const MovieList = ({ apiKey, type }) => {
  let { page } = useParams();
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    if (page === undefined) {
      page = 1;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [page]);

  return (
    <>
      <BackButton text="Lists" link="/" />
      <h1>{capitalizeFirstLetter(type)} Movies</h1>
      <div className="MovieList">
        {movieList ? (
          movieList.results.map((movie) => {
            return <MovieCover key={movie.id} {...movie} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {movieList && (
        <PageButtons page={page} total_pages={movieList.total_pages} />
      )}
    </>
  );
};

export default MovieList;
