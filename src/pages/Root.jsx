import { NavLink } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <>
      <div className="menu">
        <h1>Movie lists</h1>
        <ul>
          <NavLink to="/popular">
            <li>Popular</li>
          </NavLink>
          <NavLink to="/top_rated">
            <li>Top Rated</li>
          </NavLink>
          <NavLink to="/now_playing">
            <li>Now Playing</li>
          </NavLink>
          <NavLink to="/upcoming">
            <li>Upcoming</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Root;
