import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const Movie = ({ apiKey }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US/`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log("Movie data", data);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <nav>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <div>
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
      </div>
    </>
  );
};

export default Movie;
