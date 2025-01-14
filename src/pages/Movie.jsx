import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import "./Movie.css";
import noimg from "../images/noimg.png";

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
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [movieId]);

  return (
    <>
      {movie ? (
        <div
          className="Movie"
          style={
            movie.backdrop_path && {
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            }
          }
        >
          <BackButton text="Back" link="back" />
          <div className="MovieInfo">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img src={noimg} alt={movie.title} />
            )}
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
