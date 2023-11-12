import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCover from "../components/MovieCover/MovieCover";
import BackButton from "../components/BackButton/BackButton";
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
      <BackButton />
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
