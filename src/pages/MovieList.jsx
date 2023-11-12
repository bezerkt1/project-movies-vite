import { useState, useEffect } from "react";
import MovieCover from "../components/MovieCover/MovieCover";

const MovieList = ({ apiKey }) => {
  const [movieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
        console.log("MovieList data", data);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, []);

  return (
    <>
      <div>
        <h2>Popular Movies</h2>
        <div className="MovieList">
          {movieList ? (
            movieList.results.map((movie) => {
              return <MovieCover {...movie} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button>Previous</button>
        {page}
        <button>Next</button>
      </div>
    </>
  );
};

export default MovieList;
