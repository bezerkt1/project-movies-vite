import { useState, useEffect } from "react";
import MovieCover from "../components/MovieCover/MovieCover";
import "./MovieList.css";

const MovieList = ({ apiKey, type }) => {
  const [movieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
        console.log("MovieList data", data);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [page]);

  const handlePage = (num) => {
    const x = page + num;
    if (x > 0) {
      setPage(x);
    } else if (x >= movieList.total_pages) {
      setPage(movieList.total_pages);
    } else {
      setPage(1);
    }
  };

  return (
    <>
      <h2>Popular Movies</h2>
      <div className="MovieList">
        {movieList ? (
          movieList.results.map((movie) => {
            return <MovieCover key={movie.id} {...movie} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="PageButtons">
        {page > 1 && <button onClick={() => handlePage(-1)}>Previous</button>}
        {page}
        {movieList && (
          <>
            {page < movieList.total_pages && (
              <button onClick={() => handlePage(1)}>Next</button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MovieList;
