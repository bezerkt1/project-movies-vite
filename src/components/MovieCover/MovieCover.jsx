import { NavLink } from "react-router-dom";
import "./MovieCover.css";

const MovieCover = ({ id, poster_path, title, release_date }) => {
  return (
    <div className="Movie">
      <NavLink to={`/movies/${id}`}>
        <div className="MovieImage">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
            alt={title}
          />
          <div className="MovieOverlay">
            <p>
              {title}
              <br />
              {release_date}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCover;
