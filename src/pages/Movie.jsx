import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Movie.css";

const Movie = ({ apiKey }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

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

  return (
    <>
      {movie ? (
        <div
          className="Movie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          }}
        >
          <button class="backButton" onClick={() => navigate(-1)}>
            &lt;&nbsp;Movies
          </button>
          <div className="MovieInfo">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            />
            <div>
              <h1>{movie.title}</h1>
              <h2>{movie.tagline}</h2>
              <h3>Rating: {movie.vote_average.toFixed(1)}/10</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Movie;
