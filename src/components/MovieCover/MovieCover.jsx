import { NavLink } from "react-router-dom";
import "./MovieCover.css";
import noimg from "../../images/noimg.png";

const MovieCover = ({ id, poster_path, title, release_date }) => {
  return (
    <div className="MovieCover">
      <NavLink to={`/movie/${id}`}>
        <div className="MovieImage">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
              alt={title}
            />
          ) : (
            <img src={noimg} alt={title} />
          )}
          <div className="MovieOverlay">
            <p>{title}</p>
            <p>Release Date: {release_date}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCover;
